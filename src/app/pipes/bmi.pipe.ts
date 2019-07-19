import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bmi'
})
export class BMIPipe implements PipeTransform {
  transform(weight: number, height: number): any {
    if (isNaN(weight) || weight === null || isNaN(height) || height === null) {
      return '-';
    }
    else {
      return (weight/(Math.pow(height,2))*703).toFixed(1);
    }
  }
}
