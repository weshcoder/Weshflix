import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movies/movie-card.component';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [ CommonModule ],
  exports: [MovieCardComponent],
  providers: [],
})
export class SharedModule {}
