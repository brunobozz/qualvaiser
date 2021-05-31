import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.scss'],
})
export class PageUsuariosComponent implements OnInit {
  USERS: any[] = [];
  public userEmail = window.localStorage.getItem('userEmail');

  constructor(
    private localApi: ApiLocalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    this.localApi.getInfo('usuarios').subscribe((data) => {
      this.USERS = data;
    });
  }

  deleteUser(id: number, nome: string) {
    if (confirm('Tem certeza que deseja remover o usuário ' + nome + '?')) {
      this.localApi.deleteItem(id, 'usuarios/').subscribe(() => {
        this.getUsuarios();
        this.toastr.error('Excluído com sucesso!', nome);
      });
    }
  }
}
