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

  constructor(private dialog: MatDialog) { }
  @Input() imgUrl: string;
  @Input() movieName: string;
  @Input() rating: number;
  @Input() releaseDate: Date;
  @Input() description: string;
  @Input() genre: string;
  @Input() displayFavourite = true;
  favourite = 'favorite_border'  ;


  openDialog(movie) {
    console.log(movie);
    this.dialog.open(MovieDialogComponent, {
      data: movie,
      width: '40%',
      height: '80%'
    });
  }

  addFavourite() {
    const movie: any = {
      imgUrl: this.imgUrl,
      movieName: this.movieName,
      rating: this.rating,
      releaseDate: this.releaseDate,
      description: this.description,
      genre: this.genre
    };
    if (this.favourite === 'favorite_border') {
     this.favourite = 'favorite';
     sessionStorage.setItem(this.movieName, JSON.stringify(movie));
    } else {
      this.favourite = 'favorite_border';
      this.removeFavourite(this.movieName);
    }

  }

  removeFavourite(fav) {
      sessionStorage.removeItem(fav);
  }

  ngOnInit() {
    if (sessionStorage.getItem(this.movieName)) {
      this.favourite = 'favorite';
      console.log('W');
    }
  }

}

