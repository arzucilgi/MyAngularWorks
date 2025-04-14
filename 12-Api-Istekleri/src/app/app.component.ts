import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  template:`
  <h1>API İSTEKLERİ</h1>
  <input [(ngModel)]="model.title">
  <button (click)="save()">Save</button>
  `
})
export class AppComponent {
  title = '12-Api-Istekleri';
    model: {
    userId: number,
    id: number,
    title: string,
    completed: false
  }={
      userId: 1,
      id: 0,
      title: "",
      completed: false
  }
  // constructor(
  //   private myClient:HttpClient
  // ){
  //   this.myClient.get("https://jsonplaceholder.typicode.com/posts").subscribe((response)=>{
  //     console.log(response)
  //   })
  // }

  constructor(
    private myClient:HttpClient
  ){
    //OPTİONS EKLEME HEADERS KISMINA bu yaptıgımız işlem headers kısmına authorization ekler ve değeri deger olarak ekler 
    let headers={
      headers:{
        "authorization":"deger"
      }
    }
    this.myClient.get("https://jsonplaceholder.typicode.com/todos",headers).subscribe(response=>{
      console.log(response)
    })
    //GET
    this.myClient.get("https://jsonplaceholder.typicode.com/posts").subscribe({
      next:(response:any)=>{
        console.log(response)
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err)
      }
    })

  }
  //POST
  save(){
    this.myClient.post("https://jsonplaceholder.typicode.com/todos",this.model).subscribe(response=>{
       console.log(response)
    })
  }
}
