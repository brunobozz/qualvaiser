import { Component, OnInit } from '@angular/core';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-resultado',
  templateUrl: './page-resultado.component.html',
  styleUrls: ['./page-resultado.component.scss'],
})
export class PageResultadoComponent implements OnInit {
  VOTACAO: any[] = [];

  constructor(private localApi: ApiLocalService) {}

  ngOnInit(): void {
    this.getVotacao();
  }

  getVotacao() {
    this.localApi.getInfo('votacao').subscribe((data) => {
      this.VOTACAO = data;
      this.VOTACAO.sort((a, b) => (a.votos > b.votos ? -1 : 1));
    });
  }
}
