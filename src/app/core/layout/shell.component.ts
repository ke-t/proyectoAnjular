import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
  <app-top-bar></app-top-bar>
  <app-main-content></app-main-content>
  <app-footer></app-footer>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
