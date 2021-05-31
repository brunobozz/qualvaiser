import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-resultado',
  templateUrl: './page-resultado.component.html',
  styleUrls: ['./page-resultado.component.scss'],
})
export class PageResultadoComponent implements OnInit {
  VOTACAO: any[] = [];

  constructor(
    private localApi: ApiLocalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getVotacao();
  }

  getVotacao() {
    this.localApi.getInfo('votacao').subscribe((data) => {
      this.VOTACAO = data;
      this.VOTACAO.sort((a, b) => (a.votos > b.votos ? -1 : 1));
    });
  }

  public zerarVotacao() {
    this.VOTACAO.map((data) => {
      this.localApi.deleteItem(data.id, 'votacao/').subscribe(() => {
        this.getVotacao();
      });
    });
    this.toastr.error('Votação zerada!');
  }

  public finalizarVotacao() {
    console.log('terminar');
  }
}
