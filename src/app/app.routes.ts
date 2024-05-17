import {Routes} from '@angular/router';
import {MovieListComponent} from "./movies/components/movie-list/movie-list.component";
import {MoviesComponent} from "./movies/movies.component";

export const routes: Routes = [{
  path: 'movies', component: MoviesComponent
}];
