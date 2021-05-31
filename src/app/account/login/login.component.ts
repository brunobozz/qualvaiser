import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLocalService } from 'src/app/services/local-api/api-local.service';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private USERS: any[] = [];
  public mErro = '';

  constructor(
    private localApi: ApiLocalService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    this.localApi.getInfo('usuarios').subscribe((data) => {
      this.USERS = data;
    });
  }

  async validaLogin(user: any) {
    this.USERS.map((val) => {
      if (val.email === user.email && val.senha === user.password) {
        this.login(val);
      } else {
        this.mErro = 'Email ou senha inválidos.';
      }
    });
  }

  async login(user: any) {
    try {
      const result = await this.accountService.login(user);
      console.log('Login efetuado: ' + result);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
