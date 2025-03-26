import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  imports: [FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

   @Input() nameGelen: string=""// bu şekilde verinin dışardan geldiğini anladık.
   @Output()  changeNameEvent= new EventEmitter

   changeName(){
      this.changeNameEvent.emit(this.nameGelen)
   }
}
