import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`
  <h1>service kullanarak http isteklerinde bulunma. service içinde metodla birlikte return ifadesiyle isteği gönderip app içeirsinde yakaladık</h1>

  `
})
export class AppComponent {
  title = '13-Service-ile-api-kullanimi';
  constructor(
    private appService:AppService
  ){
    this.appService.get().subscribe(res=>{
      console.log(res)
    })
  }

  save(){
    this.appService.add({id:0,userId:1,title:"deneme",complated:false}).subscribe(res=>{
      console.log(res)
    })
  }
}
