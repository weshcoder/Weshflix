import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'moviecard-app',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.css']
})

export class MovieCardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() movieName: string;

  constructor() { }

  ngOnInit() {

  }
}
