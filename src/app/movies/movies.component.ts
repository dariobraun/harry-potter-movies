import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieService } from './movie.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { combineLatestWith, map, startWith, Subject } from 'rxjs';
import { FilterParams } from '../model/filter-params';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieListComponent, MovieFilterComponent, AsyncPipe, NgIf],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent {
  movieService = inject(MovieService);

  filterValues$ = new Subject<FilterParams>();

  movies$ = this.movieService.getMovies();

  filteredMovies$ = this.movies$.pipe(
    combineLatestWith(this.filterValues$.pipe(startWith(null))),
    map(([movies, filterValues]) => {
      if (!filterValues?.title && !filterValues?.releaseDate) {
        return movies;
      }
      return movies.filter(
        (movie) =>
          movie.title
            .toLowerCase()
            .includes(filterValues.title.toLowerCase()) &&
          movie.release_date.includes(filterValues.releaseDate),
      );
    }),
  );
}
