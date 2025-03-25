import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homw',
  imports: [RouterLink],
  templateUrl: './homw.component.html',
  styleUrl: './homw.component.css'
})
export class HomwComponent {
  constructor(
    private router:Router
  ){}
  
  logOut(){
    //localStorage.clear() hepsini siler
    localStorage.removeItem("token")
    this.router.navigateByUrl("/login")
  }

}
