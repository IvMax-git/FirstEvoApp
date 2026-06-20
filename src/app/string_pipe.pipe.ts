import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string_pipe',
  standalone: true
})
export class StringPipePipe implements PipeTransform {
  transform(value: number): number {
    return value + 5;
  }
}