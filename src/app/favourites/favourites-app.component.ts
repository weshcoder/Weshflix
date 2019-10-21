import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'favourites-app',
  templateUrl: 'favourites-app.component.html',
  styleUrls: ['favourites-app.component.css']
})

export class FavouriteComponent implements OnInit {
  movies: any = [];

  constructor() {

  }

  ngOnInit() {
    // this.movies = Object.values(sessionStorage);
    for (let value of Object.values(sessionStorage)) {
      this.movies.push(JSON.parse(value));
    }
  }

}
