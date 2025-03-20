import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {

  constructor(private el:ElementRef) { }

  @HostListener("keyup") keyup(){
    this.checkInputValidation(this.el.nativeElement)
  }

  checkInputValidation(element:any){
    const valid=element.validity.valid
    const id=element.id
    const divEl=document.querySelector(`#${id} + div`) // inputun hemen yanındali bitişiğindeki div elementini seçer.
    if(!valid){
      element.className="invalid"
      divEl!.innerHTML=element.validationMessage
    }else{
      element.className=""
      divEl!.innerHTML=""
    }
   }

}
