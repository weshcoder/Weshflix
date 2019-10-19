import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../services/search-bar.service';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movie-app',
  templateUrl: 'movie-app.component.html',
  styleUrls: ['movie-app.component.css']
})

export class MovieComponent implements OnDestroy, OnInit {

  subscription: Subscription;
  movies: any;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.getSearchValue().subscribe(searchValue => {
      const filteredMovies = this.movies.map( movie => {
        if (movie.name.includes(searchValue)) {
          console.log(movie);
          this.movies = movie;
          return movie;
        }
      });
      console.log(filteredMovies);
    });
   }

   createMovies() {
     this.movies = [
       {
         name: 'Zapped',
         imgUrl: '/assets/images/movies-1.png',
         releaseDate: '23 June 2014',
         genre: 'Comedy',
         rating: '7+',
         language: 'Eng',
         description:
         `A bright student and talented dancer
         struggling with changes in life, including a new family and school, finds a phone app that magically
         allows her to control boys.`
       },
       {
        name: 'Annie',
        imgUrl: '/assets/images/movies-2.png',
        releaseDate: '2 January 2015',
        genre: 'Comedy',
        rating: '7+',
        language: 'Eng',
        description:
        `An orphan in a facility run by the mean Miss Hannigan (Carol Burnett),
         Annie (Aileen Quinn) believes that her parents left her there by mistake.
         When a rich man named Oliver "Daddy" Warbucks
         (Albert Finney) decides to let an orphan live at his home to promote his image,
          Annie is selected. While Annie gets accustomed to living in Warbucks' mansion,
          she still longs to meet her parents.
         So Warbucks announces a search for them and a reward, which brings out many frauds.`
      },
      {
        name: 'Lab Rats',
        imgUrl: '/assets/images/movies-3.png',
        releaseDate: '23 June 2014',
        genre: 'Comedy',
        rating: '7+',
        language: 'Eng',
        description:
        `While trying to find his bedroom, Leo accidentally discovers teenage siblings with bionic superpowers
        living in his new basement. The series follows the bionic teens as they unravel in adventurous situations
        in an attempt to live life like a normal family in the fictional town of Mission Creek, California.`
      },
      {
        name: 'Daddy Day Care',
        imgUrl: '/assets/images/movies-4.png',
        releaseDate: '4 May 2003',
        genre: 'Comedy-Family',
        rating: '7+',
        language: 'Eng',
        description:
        `While his wife, Kim (Regina King), brings home the bacon, unemployed Charlie
         (Eddie Murphy) spends his days caring for the couple's young son. With help from a friend,
          Phil (Jeff Garlin), Charlie decides to start a day care center.
          Enrollment quickly surges, and, as they add another employee,
          goofy Marvin (Steve Zahn), Charlie finds himself dealing with endless red tape.
          Will he be able to keep the business afloat,
          or will parents defect to Mrs. Harridan's (Anjelica Huston) day care center?`
      },
      {
        name: 'Good Witch',
        imgUrl: '/assets/images/movies-5.png',
        releaseDate: '28 February 2019',
        genre: 'Comedy-Drama',
        rating: '7+',
        language: 'Eng',
        description:
        `When the mysterious Cassandra Nightingale moves into a supposedly haunted house
        in the suburban town of Middleton, she causes a stir among the locals - especially
        widower Jake Russell and his two children. After a series of bizarre occurrences,
        opinions towards the newcomer are divided,
        with some believing her to be a nuisance but others suspecting her of being something else entirely.`
      }
     ];
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
    this.createMovies();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
