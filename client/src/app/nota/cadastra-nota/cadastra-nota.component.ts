import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-cadastra-nota',
  templateUrl: './cadastra-nota.component.html',
  styleUrls: ['./cadastra-nota.component.css']
})
export class CadastraNotaComponent implements OnInit {

  nota = new Nota();
  nomeUsuario: string ='';

  constructor(
    private notaService: NotaService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nota.usuario = params;
      this.nomeUsuario = params.nome
    });
  }

  cadastraNota() {
    this.notaService.cadastraNota(this.nota).subscribe(() => {
      this.notaService.showMessage('Nota criada !')
      this.router.navigate(['/'])
    })
  }

}
