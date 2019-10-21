import { BrowserModule } from '@angular/platform-browser';

import { NgModule} from '@angular/core';

import { NavBarComponent } from './navbar/navbar-app.component';
import { MovieComponent } from './movies/movie-app.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './navbar/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchService } from './services/search-bar.service';
import { FavModule } from './favourites/farouties.module';
import { MaterialModule } from './material/material.module';
import { MovieDialogComponent } from './material/movie-dialog/movie-dialog.component';
import { SharedModule } from './shared/shared.module';

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
    MaterialModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieComponent,
    SearchBoxComponent,
    MovieDialogComponent,
],
  providers: [SearchService],
  bootstrap: [AppComponent],
  entryComponents: [
    MovieDialogComponent
  ]
})
export class AppModule { }
