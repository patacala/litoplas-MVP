import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrasform'
})
export class TextTrasformPipe implements PipeTransform {

  transform(value: string, arg: string): string {
    return value.split(' ').join(arg).toLowerCase();
  }

}
