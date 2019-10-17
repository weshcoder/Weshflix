import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movies-app',
  template: `
  <nav-app></nav-app>
  <router-outlet></router-outlet>
    `
})

export class AppComponent {
 title = 'weshflix';
}
