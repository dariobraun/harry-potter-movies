import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { MinutesToHoursPipe } from '../../../pipes/minutes-to-hours.pipe';
import { Movie } from '../../../model/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgForOf, DatePipe, MinutesToHoursPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  @Input()
  movies: Movie[] = [];
}
