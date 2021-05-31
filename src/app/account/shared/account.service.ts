import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', user.tipo);
      window.localStorage.setItem('userId', user.id);
      window.localStorage.setItem('userNome', user.nome);
      window.localStorage.setItem('userEmail', user.email);
      window.localStorage.setItem('userTipo', user.tipo);
      window.localStorage.setItem('userVotoData', user.voto_data);
      window.localStorage.setItem('userVotoRestaurante', user.voto_restaurante);
      resolve(true);
    });
  }

  logout() {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', '');
      resolve(true);
    });
  }
}
