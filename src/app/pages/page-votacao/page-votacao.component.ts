import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-votacao',
  templateUrl: './page-votacao.component.html',
  styleUrls: ['./page-votacao.component.scss'],
})
export class PageVotacaoComponent implements OnInit {
  public RESTAURANTES: any[] = [];
  private HISTORICO: any[] = [];
  private VOTACAO: any[] = [];
  public userId = window.localStorage.getItem('userId');
  public userVotoData = window.localStorage.getItem('userVotoData');
  public userVotoRestaurante = window.localStorage.getItem(
    'userVotoRestaurante'
  );
  public today: string = '';
  public primeiroDia: string = '';
  public ultimoDia: string = '';

  constructor(
    private localApi: ApiLocalService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dia();
    this.semana();
    this.getHistorico();
    this.getRestaurantes();
    this.getVotacao();
  }

  private dia() {
    let hoje = new Date();
    hoje.setDate(hoje.getDate());
    this.today = hoje.toLocaleDateString();
  }

  private semana() {
    let data = new Date();
    let primeiro = data.getDate() - data.getDay();
    this.primeiroDia = new Date(data.setDate(primeiro)).toLocaleDateString();
    this.ultimoDia = new Date(
      data.setDate(data.getDate() + 6)
    ).toLocaleDateString();
  }

  private getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data.filter((data1: { id: any }) => {
        return !this.HISTORICO.some((data2) => {
          return data1.id === data2.vencedor_id;
        });
      });
    });
  }

  private getHistorico() {
    this.localApi.getInfo('historico').subscribe((data) => {
      this.HISTORICO = data.filter((data1: { data_almoco: string }) => {
        return data1.data_almoco >= this.primeiroDia;
      });
    });
  }

  private getVotacao() {
    this.localApi.getInfo('votacao').subscribe((data) => {
      this.VOTACAO = data;
    });
  }

  public votar(nome: string, id: number) {
    if (confirm('Tem certeza que deseja votar no restaurante ' + nome + '?')) {
      this.getVotacao();
      let found = false;
      this.VOTACAO.map((data) => {
        if (data.nome === nome) {
          found = true;
          this.addVoto(nome, data.id, data.votos + 1);
        }
      });
      if (!found) {
        console.log('nao tem');
        this.criaVoto(nome, id);
      }
      this.registraVotoUsuario(nome);
    }
  }

  private registraVotoUsuario(restaurante: string) {
    let body = {
      voto_data: this.today,
      voto_restaurante: restaurante,
    };
    this.localApi
      .patchItem('usuarios', Number(this.userId), body)
      .subscribe(() => {
        window.localStorage.setItem('userVotoData', this.today);
        window.localStorage.setItem('userVotoRestaurante', restaurante);
        this.router.navigate(['/home']);
      });
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
