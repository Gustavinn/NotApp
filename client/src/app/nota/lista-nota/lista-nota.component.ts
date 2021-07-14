import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.css']
})
export class ListaNotaComponent implements OnInit {

  displayedColumns: string[] = ['disciplina', 'valorNota', 'usuario']
  dataSource!: Nota[];

  nota = new Nota();
  nomeUsuario?: string;
  codUsuario: number = 0;

  constructor(private notaService: NotaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nota.usuario = params;
      this.nomeUsuario = params.nome
      this.codUsuario = params.codigo;
    });

    console.log(this.codUsuario)

    if (this.codUsuario == undefined) {
      this.notaService.listarNota().subscribe(nota => {
        this.dataSource = nota
      });
    } else {
      this.notaService.listarNotaUsuario(this.codUsuario).subscribe(nota => {
        this.dataSource = nota
      });
    }

  }

  cadastrarNota() {
    this.router.navigate(['/cadastra-nota'])
  }

}
