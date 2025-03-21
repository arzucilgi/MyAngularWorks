import { Component } from '@angular/core';
import { BComponent } from './components/b/b.component';
import { AComponent } from "./components/a/a.component";


@Component({
  selector: 'app-root',
  imports: [ AComponent],
  template:`
    <app-a></app-a>
  `
})
export class AppComponent {
  title = 'service';
}
