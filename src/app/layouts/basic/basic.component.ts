import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template:   `
  <app-header></app-header>
  <router-outlet></router-outlet>`,
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
