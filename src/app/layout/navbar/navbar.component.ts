import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input()
  menu: MenuComponent = new MenuComponent();
  public userName = window.localStorage.getItem('userNome');
  public userTipo = window.localStorage.getItem('userTipo');

  isOpen: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menu.toggleMenu();
    this.isOpen = !this.isOpen;
  }

  async logout() {
    try {
      const result = await this.accountService.logout();
      console.log('Logout efetuado: ' + result);
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
    }
  }
}
