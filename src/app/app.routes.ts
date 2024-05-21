import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  { path: 'movies/:movieId', component: MovieDetailsComponent },
];
