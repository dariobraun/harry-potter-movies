import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css',
})
export class MovieFilterComponent {
  @Output()
  titleChanged = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    releaseYear: new FormControl(''),
  });
}
