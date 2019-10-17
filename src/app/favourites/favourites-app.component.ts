import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'favourites-app',
  templateUrl: 'favourites-app.component.html'
})

export class FavouriteComponent {
  constructor() { }

  favourite = false;

}
