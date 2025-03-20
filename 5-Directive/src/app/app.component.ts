import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenklendirDirective } from './renklendir.directive';
import { ValidateDirective } from './validate.directive';
// angularda element oluşturduğumuz gibi attribute de oluşturabiliriz. bir elementin üzerine geldiğimizde rengi kırmızı üzerinden gidince rengi 
// mavi olan attribute yazabiliriz.Directiveler bizim attribute oluşturmamızı sağlar.Terminalden ng generate directive name şeklinde oluşturabilirz.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RenklendirDirective,ValidateDirective],
  template:`
  <h1 appRenklendir="green"  test="test">Directive</h1>
  <input id="input"  appValidate  type="text" required minlength="6">
  <div></div>
  <button type="submit">Send</button>
  `
})
export class AppComponent {
  
}
