import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Nota } from './nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  baseUrl = "http://localhost:8080/nota";

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient
    ) { }

  listarNota(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  listarNotaUsuario(codUsuario: number): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.baseUrl}/${codUsuario}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  cadastraNota(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.baseUrl, nota).pipe(
      map((obj) => obj), 
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro !", true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"]
    })
  }
  

}
