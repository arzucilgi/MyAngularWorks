import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

//Route yaparken eğer bir parametre göndermek istersek (id, name vb) app.routes sayfasından parametre göndermek istediğimiz path yanına 
// /:param gibi bir değişken verirsek bunu gerçeleştirmiş oluruz.

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  template:`
  <!-- <nav>
    <a routerLink="/home">Home Page</a>
    <a routerLink="/about">About Page</a>
    <a routerLink="/contact">Contact Page</a>
    <a routerLink="/login"></a>

  </nav> -->
  
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'routing';

}
