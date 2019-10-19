import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../services/search-bar.service';
import { Subscription } from 'rxjs';
import { MovieData } from './movies.data';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movie-app',
  templateUrl: 'movie-app.component.html',
  styleUrls: ['movie-app.component.css']
})



export class MovieComponent implements OnDestroy, OnInit {

  subscription: Subscription;
  movies: any = MovieData;
  filteredMovies: any;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.getSearchValue().subscribe(searchValue => {
      this.createMovies(searchValue.toLowerCase());
    });
   }

   createMovies(movieName) {
   this.filteredMovies = this.movies.filter( movie => {
      movie !== null

        if (movie.name.toLowerCase().includes(movieName)) {
          console.log(movie);
          return movie;
        }

    });
   }

    // movie9 : '->Prom',
    // movie10 : '->FatLiar',
    // movie11 : 'Titans Go',
    // movie12 : 'Spiderman',
    // movie13 : 'Titans Go',
    // movie14 : 'RobinHood',
    // movie15 : 'Monster Uni',
  // ];

  ngOnInit() {
    this.filteredMovies = this.movies;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
