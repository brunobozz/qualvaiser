import { Component, Input, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input()
  menu: MenuComponent = new MenuComponent();

  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menu.toggleMenu();
    this.isOpen = !this.isOpen;
  }
}
