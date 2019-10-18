import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './navbar/navbar-app.component';
import { MovieComponent } from './movies/movie-app.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './navbar/search-bar/search-bar.component';
import { MovieCardComponent } from './movies/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchService } from './services/search-bar.service';
import { MovieDetailsComponent } from './movie-dialog/movie-details-dialog.component';
import { FavModule } from './favourites/farouties.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FavModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'Kids', component: MovieComponent },
      { path: '', redirectTo: 'Kids', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./favourites/farouties.module').then(m => m.FavModule) }
    ]),
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieComponent,
    SearchBoxComponent,
    MovieCardComponent,
    MovieDetailsComponent,
],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
