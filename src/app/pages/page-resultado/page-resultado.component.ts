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
  public today: string = '';

  constructor(
    private localApi: ApiLocalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.dia();
    this.getVotacao();
  }

  private dia() {
    let hoje = new Date();
    hoje.setDate(hoje.getDate());
    this.today = hoje.toLocaleDateString();
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
    if (this.VOTACAO.length != 0) {
      let data = {
        data_almoco: this.today,
        vencedor_nome: this.VOTACAO[0].nome,
        vencedor_id: this.VOTACAO[0].id_restaurante,
      };

      this.localApi.postItem('historico', data).subscribe(() => {
        this.zerarVotacao();
      });
    }
  }
}
