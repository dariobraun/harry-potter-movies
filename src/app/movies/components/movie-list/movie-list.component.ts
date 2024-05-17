import {Component, inject} from '@angular/core';
import {MovieService} from "../../movie.service";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {MinutesToHoursPipe} from "../../../pipes/minutes-to-hours.pipe";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    DatePipe,
    MinutesToHoursPipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movieService = inject(MovieService);

  movies$ = this.movieService.getMovies();
}
