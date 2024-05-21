import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { MovieDetails } from '../model/movie-details';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);

  getMovies() {
    return this.http.get<Movie[]>('/movies');
  }

  getMovie(id: string) {
    return this.http.get<MovieDetails>(`/movies/${id}`);
  }
}
