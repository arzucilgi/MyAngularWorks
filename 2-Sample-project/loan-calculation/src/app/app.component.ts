import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template:`
  <div>
    <label >Kredi Tutarı</label>
    <input [(ngModel)]="krediTutari">
  </div>
  <div>
    <label >Taksit Sayısı</label>
    <select [(ngModel)]="taksitSayisi">
        @for(data of taksitler; track data){
          <option >{{data}}</option>
        }
    </select>
  </div>
  <div>
    <button (click)="hesapla()">Hesapla</button>
  </div>
  <hr>
  <h1>{{result}}</h1>
  <hr>
  <table>
     <thead>
        <tr>
           <th>Taksit</th>
          <th>Taksit Tutarı</th>
          <th>Kalan Ödeme</th>
        </tr>
          
     </thead>
     <tbody> 
         @for(data of odemePlani;track data){
          <tr>
          <td>{{$index+1}}</td>
          <td>{{data.taksitTutari}}</td>
          <td>{{data.kalanGeriOdeme}}</td>
          </tr>
         }
     </tbody>
  </table>
  `
})
export class AppComponent {
  krediTutari:number=0
  taksitler:number[]=[3,6,12,24]
  taksitSayisi:number=3
  result: string=""

  odemePlani:{taksitTutari:number ,kalanGeriOdeme:number}[]=[]

  hesapla(){
    const taksitTutari:number= (this.krediTutari/this.taksitSayisi)*1.29
    let  toplamGeriOdeme:number= taksitTutari*this.taksitSayisi

    this.result=`Taksit Tutarı: ${taksitTutari} - Taksit Sayısı: ${this.taksitSayisi} - Toplam Geri Ödeme: ${toplamGeriOdeme}`

    for (let index = 0; index < this.taksitSayisi; index++) {
      toplamGeriOdeme -=taksitTutari
      const data={
        taksitTutari:taksitTutari,
        kalanGeriOdeme:toplamGeriOdeme
      }
      this.odemePlani.push(data)
    }
  }
}
