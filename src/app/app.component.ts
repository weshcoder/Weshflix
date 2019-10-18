import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movies-app',
  template: `
  <nav-app></nav-app>
  <div [@slideInAnimation]="o.isActivated ?  o.activatedRoute : ''">
    <router-outlet #o="outlet"></router-outlet>
  </div>
    `,
  animations: [slideInAnimation]
})

export class AppComponent {
 title = 'weshflix';
}
