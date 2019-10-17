import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movie-app',
  templateUrl: 'movie-app.component.html',
  styleUrls: ['movie-app.component.css']
})

export class MovieComponent {
  constructor() { }



   movies = [

    {
      name : 'Zapped',
      imgUrl : '../../assets/images/movies-1.png'
    },
    {
      name : 'Annie',
      imgUrl : '../../assets/images/movies-2.png'
    },
    {
      name : 'labRats',
      imgUrl : '../../assets/images/movies-3.png'
    },
    {
      name : 'Dad Day Care',
      imgUrl : '../../assets/images/movies-4.png'
    },
    {
      name : 'Good Witch',
      imgUrl : '../../assets/images/movies-5.png'
    },
    // movie6 : '-> Monster Uni',
    // movie7 : 'Maleficent',
    // movie8 : 'Minion3',
    // movie9 : '->Prom',
    // movie10 : '->FatLiar',
    // movie11 : 'Titans Go',
    // movie12 : 'Spiderman',
    // movie13 : 'Titans Go',
    // movie14 : 'RobinHood',
    // movie15 : 'Monster Uni',
  ];


}
