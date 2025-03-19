import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(
    private myActivated:ActivatedRoute
  ){
    //PARAMETRE İLE SAYFA YAKALAMA
    this.myActivated.params.subscribe((res)=>{
      console.log(res) // /contact/cfvgbhjnjmk gibi herhangi bir şeyi param ile yakalar ve bunu console yazdırır.
      console.log(res['params'])
    })
  }
}
