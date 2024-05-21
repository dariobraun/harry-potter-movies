import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarAmount',
  standalone: true,
})
export class DollarAmountPipe implements PipeTransform {
  transform(value: string): string {
    return `$${value} million`;
  }
}
