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
    console.log(this.RESTAURANTES);
  }

  getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data;
    });
  }

  votar(id:number){
    console.log(id);
  }
}
