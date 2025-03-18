import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  template:`
  <h1>Döngüler</h1>
  <ul>
    @for (todo of todos; track todo) {
      <li>index:{{$index}} || ilk kayıt mı:{{$first}} || son kayıt mı :{{$last}} veri:{{todo}}</li>
    }

    @for (data of todos2; track data) {
      <li>index:{{$index}} || 
        ilk kayıt mı:{{$first}} ||
         son kayıt mı :{{$last}}||
          veri:{{data.work}}
        </li>
    }
  </ul>

  <h1>Koşul Yapıları</h1>

  @if(showFirstWord){
    <p style="color: {{showFirstWord===true ? 'red' : ''}};">Birinci cümleyi görüyorsun {{showFirstWord===true ? 'red' : ''}}</p>
  }
  @if(shoeSecondWord){
    <p>İkinci cümleyi görüyorsun</p>
  }

  <button (click)="show(1)">Birinci Cümle</button>
  <button (click)="show(2)">İkinci Cümle</button>
  `
})
export class AppComponent {
  todos:string[]=[
    "example1",
    "example2",
    "example3"
  ]

  todos2: {work:string,isComplated:boolean}[]=[
      {work:"example1", isComplated:true},
      {work:"example2", isComplated:true},
      {work:"example3",isComplated:true}

  ]

  todos3: TodoModel[]=[
    {work:"example1", isComplated:true},
    {work:"example2", isComplated:true},
    {work:"example3",isComplated:true}
  ]

  constructor(){
    this.loop()
  }

  loop(){
      for(let i=0;i<this.todos.length;i++){
        console.log(this.todos[i])
      }

      this.todos2.forEach((val)=>{
        console.log(val.work)
        console.log(val.isComplated)
      })
     // for of da asenkron kodlama yapabiliyoruzz
      for(let data of this.todos2){
        console.log(data.work)
        console.log(data.isComplated)
      }
      for(let index in this.todos2){
        console.log(this.todos2[index].work)
      }

  }
  //KOŞUL YAPILARI KODLARI
      showFirstWord:boolean=false
      shoeSecondWord:boolean=false

      show(num:number){
        if(num===1){
          this.showFirstWord=true
          this.shoeSecondWord=false
        }else{
          this.shoeSecondWord=true
          this.showFirstWord=false
        }
      }

}
export class TodoModel{
  work:string="";
  isComplated:boolean=true;
}