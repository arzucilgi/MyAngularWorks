import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';
// bu yapı bir attributedur. Bu attribute sadece tek bir evenyte bağlıdır. Başka türlü burdaki işlemleri gerçekleştiremeyiz.

@Directive({
  selector: '[appRenklendir]' // directive adı
})
export class RenklendirDirective {

  @Input("appRenklendir") color: string | undefined
  @Input("test") test:string|undefined

  constructor( private element:ElementRef) { }

  @HostListener("mouseenter") method1(){
    console.log(this.color)
    console.log(this.test)
    this.element.nativeElement.style="color:red"
    this.element.nativeElement.innerHTML=this.test
      console.log("mouse elementin üzerine geldi ")
  }
  @HostListener("mouseleave") method2(){
    this.element.nativeElement.style="color:black"
     console.log("mouse elementin üzerinden ayrıldı")
  }

}
