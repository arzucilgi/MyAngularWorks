import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { NamePipe } from './name.pipe';
import { CommonModule } from '@angular/common';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-root',
  imports: [FormsModule,SearchPipe,NamePipe,CommonModule,TrCurrencyPipe],
  template:`
  <h1>Pipe</h1>
  <div>
    <input [(ngModel)]="work" type="text" >
    <button  (click)="save()" >Save</button>
  </div>

  <div>
    <ul>
     <input type="search" [(ngModel)]="thisSearch" placeholder="Search Something">

    @for(i of array | search:thisSearch; track i){
      <li>{{i}}</li>
    }

    </ul>
  </div>

  <h1>{{name | namePipe}}</h1>
  <!-- Hazır olan pipe kullanımları CommonModule-->


  <h1>{{readyPipe | uppercase| titlecase}}</h1>
  <h1>{{ date | date:'dd.MM.yyy  HH.mm.ss' }}</h1>
  <h1>{{num | currency :'EUR':'symbol-narrow':'1.2-2'}}</h1>
  <h1>{{num |trCurrency:'₺':true}}</h1>

  `
})
export class AppComponent {
  work:string=""
  array:string[]=["Elma","Armut","Kivi"]  
  thisSearch:string=""
  name:string="Arzu Nur"
  //Hazır olan pipe kullanımları için değişken tanımı

  readyPipe: string=" readyPipe üzerinde işlemler yapalım."
  date: Date=new Date()
  num:number=17000.25

  save(){
     this.array.push(this.work)
     this.work=""
  }


}
