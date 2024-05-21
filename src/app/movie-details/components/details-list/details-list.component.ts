import { Component, Input } from '@angular/core';
import { MovieDetails } from '../../../model/movie-details';
import { DollarAmountPipe } from '../../../pipes/dollar-amount.pipe';
import { MinutesToHoursPipe } from '../../../pipes/minutes-to-hours.pipe';

@Component({
  selector: 'app-details-list',
  standalone: true,
  imports: [DollarAmountPipe, MinutesToHoursPipe],
  templateUrl: './details-list.component.html',
  styleUrl: './details-list.component.css',
})
export class DetailsListComponent {
  @Input()
  movieDetails?: MovieDetails;
}
