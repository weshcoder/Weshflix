import { NgModule } from '@angular/core';
import { FavouriteComponent } from './favourites-app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'favs', component: FavouriteComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
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



