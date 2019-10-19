import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovieDialogComponent } from '../material/movie-dialog/movie-dialog.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'moviecard-app',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.css']
})

export class MovieCardComponent implements OnInit {

  constructor() { }
  @Input() imgUrl: string;
  @Input() movieName: string;
  @Input() rating: number;
  @Input() releaseDate: Date;
  @Input() description: string;
  @Input() genre: string;

  // openDialog() {
  //   this.dialog.open(MovieDialogComponent, {
  //     width: '300px'
  //   })
  // }

  ngOnInit() {

  }

}

