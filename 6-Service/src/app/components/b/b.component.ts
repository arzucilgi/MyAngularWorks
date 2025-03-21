import { Component, Inject } from '@angular/core';
import { AComponent } from '../a/a.component';
import { ExampleServiceService } from '../service/example-service.service';

@Component({
  selector: 'app-b',
  standalone:true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

 // example=Inject(ExampleServiceService)
  constructor(
   public ex:ExampleServiceService
  ){ }

}
