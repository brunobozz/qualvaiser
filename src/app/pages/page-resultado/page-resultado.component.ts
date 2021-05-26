import { Component, OnInit } from '@angular/core';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-resultado',
  templateUrl: './page-resultado.component.html',
  styleUrls: ['./page-resultado.component.scss'],
})
export class PageResultadoComponent implements OnInit {
  RESTAURANTES: any[] = [];

  constructor(private localApi: ApiLocalService) {}

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data;
      this.RESTAURANTES.sort((a, b) => (a.votos > b.votos ? -1 : 1));
    });
  }
}
