import { Component, OnInit } from '@angular/core';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-votacao',
  templateUrl: './page-votacao.component.html',
  styleUrls: ['./page-votacao.component.scss'],
})
export class PageVotacaoComponent implements OnInit {
  RESTAURANTES: any[] = [];

  constructor(private localApi: ApiLocalService) {}

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data;
    });
  }

  votar(id: number) {
    var Hoje = new Date();
    Hoje.setDate(Hoje.getDate() - 1);
    var Today = Hoje.toLocaleDateString();
    console.log(Today);

    // this.localApi.registraVoto(id);
  }
}
