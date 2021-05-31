import { Component, OnInit } from '@angular/core';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-restaurantes',
  templateUrl: './page-restaurantes.component.html',
  styleUrls: ['./page-restaurantes.component.scss'],
})
export class PageRestaurantesComponent implements OnInit {
  RESTAURANTES: any[] = [];
  alertList = document.querySelectorAll('.alert');

  constructor(
    private localApi: ApiLocalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data;
    });
  }

  addRestaurante(form: any) {
    this.localApi.postItem('restaurantes', form).subscribe(() => {
      this.getRestaurantes();
      this.toastr.success('Adicionado com sucesso!', form.nome);
    });
  }

  deleteRestaurante(id: number, restaurante: string) {
    this.localApi.deleteItem(id, 'restaurantes/').subscribe(() => {
      this.getRestaurantes();
      this.toastr.error('Excluído com sucesso!', restaurante);
    });
  }
}
