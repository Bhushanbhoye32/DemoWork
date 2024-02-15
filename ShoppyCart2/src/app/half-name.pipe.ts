import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'halfName'
})
export class HalfNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,15)+"...";
  }

}
