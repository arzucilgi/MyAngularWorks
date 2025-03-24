import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], search:string): string[] {
    if(!search) return value

    return value.filter(p=> p.includes(search))
  }

}
