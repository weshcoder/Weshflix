import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-app',
  templateUrl: 'navbar-app.component.html',
  styleUrls: ['navbar-app.component.css']
})

export class NavBarComponent {
  @Output() searchValue$: Subject<string> = new Subject();

  searchMovie() {
    console.log();
  }

  queryValue(value) {
    this.searchValue$.next(value);
  }
}
