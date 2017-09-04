import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: `
  <nav>
    <a routerLink="/catalogo/nuevo">   ->Nuevo</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
