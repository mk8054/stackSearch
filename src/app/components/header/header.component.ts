import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `<nav class="navbar shadow fixed-top navbar-dark bg-primary justify-content-between">
  <div class="container">
      <div class="row w-100 align-items-center">
          <div class="col-md-8 text-center text-md-start py-3">
              <a class="navbar-brand">Stack Search</a>
          </div>
          <div class="col-md-4">
            <div class="input-group mb-3">
              <input type="text" [(ngModel)]="searchTerm" placeholder="Search Keyword" class="form-control" >
              <div class="input-group-append">
                <button (click)="search()" class="btn btn-dark" type="button">Search</button>
              </div>
            </div>
          </div>
      </div>
  </div>
</nav>`,
})
export class HeaderComponent implements OnInit {
  searchTerm: string = "";
  constructor(private service: AppService,private router:Router) {
  }
  search() {
    this.router.navigateByUrl('/');
    this.service.doSearch(this.searchTerm);
    this.searchTerm = ""
  }

  ngOnInit(): void {
  }

}
