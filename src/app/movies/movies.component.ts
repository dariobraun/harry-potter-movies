import { Component } from '@angular/core';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieFilterComponent} from "./components/movie-filter/movie-filter.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MovieListComponent,
    MovieFilterComponent
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  protected readonly MovieListComponent = MovieListComponent;
}
