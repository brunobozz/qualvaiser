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

  private getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data;
    });
  }

  private getVotacao() {
    this.localApi.getInfo('votacao').subscribe((data) => {
      this.VOTACAO = data;
    });
  }

  public votar(nome: string, id: number) {
    this.getVotacao();
    let found = false;
    let voto = 0;
    let id_voto;
    if (this.VOTACAO != null) {
      for (var i = 0; i < this.VOTACAO.length; i++) {
        if (this.VOTACAO[i].nome === nome) {
          found = true;
          voto = this.VOTACAO[i].votos + 1;
          id_voto = this.VOTACAO[i].id;
          break;
        }
      }
    }

    if (found) {
      this.addVoto(nome, id_voto, voto);
    } else {
      this.criaVoto(nome, id);
    }
  }

  private criaVoto(nome: string, id: number) {
    let body = {
      id_restaurante: id,
      nome: nome,
      votos: 1,
    };

    this.localApi.postItem('votacao', body).subscribe(() => {
      this.toastr.success('Você votou no ' + nome, 'Feito!!');
    });
  }

  private addVoto(nome: string, id: number, voto: number) {
    let body = {
      votos: voto,
    };
    this.localApi.patchItem('votacao', id, body).subscribe(() => {
      this.toastr.success('Você votou no ' + nome, 'Feito!!');
    });
  }
}

// var Hoje = new Date();
// Hoje.setDate(Hoje.getDate() - 1);
// var Today = Hoje.toLocaleDateString();
// console.log(id + ' - ' + Today);
