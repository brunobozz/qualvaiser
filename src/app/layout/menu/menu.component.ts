import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isOpen: boolean = false;
  public userTipo = window.localStorage.getItem('token');

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    if (this.isOpen) {
      this.isOpen = !this.isOpen;
    }
  }
}
