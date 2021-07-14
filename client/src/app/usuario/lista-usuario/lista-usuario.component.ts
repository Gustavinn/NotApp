import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nome', 'acoes']
  dataSource!: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuario().subscribe(usuarios => {
      this.dataSource = usuarios
    });
  }

  cadastraUsuario() {
    this.router.navigate(['/cadastra-usuario'])

  }
}
