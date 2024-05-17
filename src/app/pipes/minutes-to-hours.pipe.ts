import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
  standalone: true,
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(inputMinutes: string): string {
    const minutesAsNumber = Number(inputMinutes);
    const hours = Math.floor(minutesAsNumber / 60);
    const minutes = minutesAsNumber % 60;

    return `${hours}h ${minutes}min`;
  }
}
