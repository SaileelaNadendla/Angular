import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipe'
})
export class HighlightPipePipe implements PipeTransform {

  transform(value: string, placeCode: string): string {

    if(placeCode==='Hyd'){
      return 'Hitech city';
    }
    else{
      return ' Tourist city';
    }
    //return 'Name of city:' +placeCode;
  }

}
