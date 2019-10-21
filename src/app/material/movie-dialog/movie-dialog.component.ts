import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-movieimages',
    templateUrl: './movie-dialog.component.html',
    styleUrls: ['./movie-dialog.component.css']
})

export class MovieDialogComponent implements OnInit {
  imgUrl: string;
  description: string;
  rating: number;
  genre: string;
  director: string;
  // movieCard: MovieCardComponent = new MovieCardComponent(MatDial);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    const {imgUrl, rating, genre, director, releaseDate, description} = this.data;
    this.imgUrl = imgUrl;
    this.description = description;
    this.rating = rating;
    this.genre = genre;
    this.director = director;
  }
}
