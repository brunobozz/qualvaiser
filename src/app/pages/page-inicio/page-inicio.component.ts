import { Component, OnInit } from '@angular/core';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-inicio',
  templateUrl: './page-inicio.component.html',
  styleUrls: ['./page-inicio.component.scss'],
})
export class PageInicioComponent implements OnInit {
  public HISTORICO: any[] = [];
  public userVotoData = window.localStorage.getItem('userVotoData');
  public userVotoRestaurante = window.localStorage.getItem(
    'userVotoRestaurante'
  );
  public today: string = '';
  public primeiroDia: string = '';
  public ultimoDia: string = '';

  constructor(private localApi: ApiLocalService) {}

  ngOnInit(): void {
    this.dia();
    this.semana();
    this.getHistorico();
  }

  private getHistorico() {
    this.localApi.getInfo('historico').subscribe((data) => {
      this.HISTORICO = data.filter((data1: { data_almoco: string }) => {
        return data1.data_almoco >= this.primeiroDia;
      });
    });
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
    this.ultimoDia = new Date(data.setDate(data.getDate() + 6)).toLocaleDateString();
  }
}
