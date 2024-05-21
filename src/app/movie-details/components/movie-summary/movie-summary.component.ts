import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MovieDetails } from '../../../model/movie-details';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-summary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-summary.component.html',
  styleUrl: './movie-summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSummaryComponent {
  @Input()
  details?: MovieDetails;
}
