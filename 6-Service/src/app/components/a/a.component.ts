import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';
import { FormsModule } from '@angular/forms';
import { ExampleServiceService } from '../service/example-service.service';

@Component({
  selector: 'app-a',
  standalone:true,
  imports: [BComponent,FormsModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
   constructor(
    public ex:ExampleServiceService// bu yapı sayesinde example değişkenin içerisindeki her şeyi her yerde kullanabilirm
   ){}
}
