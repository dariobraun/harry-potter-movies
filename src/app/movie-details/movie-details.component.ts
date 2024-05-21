import { Component, inject } from '@angular/core';
import { MovieService } from '../movies/movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { filter, switchMap } from 'rxjs';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { DetailsListComponent } from './components/details-list/details-list.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    MovieSummaryComponent,
    DetailsListComponent,
    RouterLink,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  route = inject(ActivatedRoute);
  movieService = inject(MovieService);

  movieDetails$ = this.route.params.pipe(
    filter((params) => !!params['movieId']),
    switchMap((params) => this.movieService.getMovie(params['movieId'])),
  );
}
