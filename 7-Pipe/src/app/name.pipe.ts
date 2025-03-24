import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    //  value : işlem yapılacak değeri temsil eder. Yani Arzu Nur'u
    // ...args: pipe'a verilen parametreyi temsil eder. Biz bu işlemde bir şey göndermediğimiz için bu kısmı değiştirmedik.
    return "Mrs." + value;

  }

}
