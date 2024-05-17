import { Component, inject } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieService } from './movie.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieListComponent, MovieFilterComponent, AsyncPipe, NgIf],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movieService = inject(MovieService);

  movies$ = this.movieService.getMovies();
}