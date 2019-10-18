import { NgModule } from '@angular/core';
import { FavouriteComponent } from './favourites-app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'favs', component: FavouriteComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    FavouriteComponent,
  ],
  exports: [
    FavouriteComponent,
    RouterModule
  ],

  providers: [],
})
export class FavModule { }



