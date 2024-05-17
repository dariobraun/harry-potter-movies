import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FilterParams } from '../../../model/filter-params';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieFilterComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  @Output()
  inputChange = new EventEmitter<FilterParams>();

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    releaseDate: new FormControl(''),
  });

  ngOnInit() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((formValue) => {
        this.inputChange.emit(formValue);
      });
  }
}
