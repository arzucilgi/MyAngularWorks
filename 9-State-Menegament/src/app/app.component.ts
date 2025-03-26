import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ExampleComponent],
  template:`
  <h1>State-Menegament/ Input-Output</h1>
  <p>Benim adım <strong>{{name}}</strong></p>

   <hr>
 <app-example [nameGelen]="name" (changeNameEvent)="changeName($event)"></app-example>   <!-- bu componentten example veri göndermek için example componentini bunun içerisine aldık. -->


  `
})
export class AppComponent {
  title = 'State-Menegament';
  name: string="Arzu"

  changeName(event:string){
    this.name=event
  }
}
