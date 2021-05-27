import { Component, OnInit } from '@angular/core';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';

@Component({
  selector: 'app-page-restaurantes',
  templateUrl: './page-restaurantes.component.html',
  styleUrls: ['./page-restaurantes.component.scss'],
})
export class PageRestaurantesComponent implements OnInit {
  
  RESTAURANTES: any[] = [];
  alertList = document.querySelectorAll('.alert')

  constructor(private localApi: ApiLocalService) {}

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.localApi.getInfo('restaurantes').subscribe((data) => {
      this.RESTAURANTES = data;
    });
  }

  addRestaurante(form: any) {
    this.localApi.addRestaurant(form).subscribe(() => {
      this.getRestaurantes();
    });
  }

  deleteRestaurante(id: number) {
    this.localApi.deleteItem(id).subscribe(() => {
      this.getRestaurantes();
    });
  }

}
