import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'searchbox-app',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBoxComponent implements OnInit {
  @Output() query: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  searchMovie(event) {
    const {target: {value}} = event;
    this.query.emit(value);
    console.log(value);

  }
}
