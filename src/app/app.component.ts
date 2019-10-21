import { Component } from '@angular/core';
// import { slideInAnimation } from './app.animation';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'movies-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  // animations: [slideInAnimation]
})

export class AppComponent {
 title = 'weshflix';
 loading = true;

 constructor(private router: Router) {
   router.events.subscribe((routerEvent: Event) => {
     if (routerEvent instanceof NavigationStart) {
       this.loading = true;
     }

     if (routerEvent instanceof NavigationEnd ||
         routerEvent instanceof NavigationCancel ||
         routerEvent instanceof NavigationError) {
           this.loading = false;
         }
   });
 }
}
