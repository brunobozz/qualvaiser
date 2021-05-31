import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-votacao',
  templateUrl: './page-votacao.component.html',
  styleUrls: ['./page-votacao.component.scss'],
})
export class PageVotacaoComponent implements OnInit {
  public RESTAURANTES: any[] = [];
  private VOTACAO: any[] = [];
  public userId = window.localStorage.getItem('userId');
  public userVotoData = window.localStorage.getItem('userVotoData');
  public userVotoRestaurante = window.localStorage.getItem(
    'userVotoRestaurante'
  );
  public today: string = '';

  constructor(
    private localApi: ApiLocalService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let hoje = new Date();
    hoje.setDate(hoje.getDate() - 1);
    this.today = hoje.toLocaleDateString();
    console.log('hoje é ' + this.today);
    console.log('votou em: ' + this.userVotoData);

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
    }

    this.registraVotoUsuario(nome);
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
