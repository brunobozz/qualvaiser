import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-votacao',
  templateUrl: './page-votacao.component.html',
  styleUrls: ['./page-votacao.component.scss'],
})
export class PageVotacaoComponent implements OnInit {
  RESTAURANTES: any[] = [];
  VOTACAO: any[] = [];

  constructor(
    private localApi: ApiLocalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getRestaurantes();
    this.getVotacao();
  }

  getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data;
    });
  }

  getVotacao() {
    this.localApi.getInfo('votacao').subscribe((data) => {
      this.VOTACAO = data;
    });
  }

  votar(nome: string, id: number) {
    let found = false;
    if (this.VOTACAO != null) {
      for (var i = 0; i < this.VOTACAO.length; i++) {
        if (this.VOTACAO[i].id_restaurante === id) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      console.log('já tem');
      this.addVoto(id);
    } else {
      console.log('nao tem');
      this.criaVoto(nome, id);
    }
  }

  criaVoto(nome: string, id: number) {
    let body = {
      id_restaurante: id,
      nome: nome,
      votos: 1,
    };

    this.localApi.postVoto(body).subscribe((data) => {
      this.toastr.success('Você votou no ' + nome, 'Feito!!');
    });
  }

  addVoto() {
    
  }
}

// var Hoje = new Date();
// Hoje.setDate(Hoje.getDate() - 1);
// var Today = Hoje.toLocaleDateString();
// console.log(id + ' - ' + Today);
