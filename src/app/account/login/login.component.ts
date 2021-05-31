import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  async validaLogin(form: any) {
    try {
      const result = await this.accountService.login(form);
      console.log('Login efetuado: ' + result);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
