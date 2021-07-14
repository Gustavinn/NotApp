import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent implements OnInit {

  usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  cadastraUsuario() {
    this.usuarioService.cadastraUsuario(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário criado !')
      this.router.navigate(['/'])
    })
  }
}
