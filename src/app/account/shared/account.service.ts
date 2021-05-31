import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', user.tipo);
      window.localStorage.setItem('user', user.nome);
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
