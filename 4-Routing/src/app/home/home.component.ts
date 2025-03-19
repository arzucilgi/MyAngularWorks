import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private myRouter:Router
  ){}
  goToAboutPage(){
     this.myRouter.navigate(["about"])// buttona tıklanıldığında abput sayfasına gidiyor
     this.myRouter.navigateByUrl("/about")
  }
}
