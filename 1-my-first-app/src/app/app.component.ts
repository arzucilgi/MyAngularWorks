import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.components';
import { ContactComponent } from './contact/contact.components';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [  HomeComponent,AboutComponent,ContactComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  //DEĞİŞKEN TANIMLAMA
  helloWorld:string="Hello world from TS" // Bu şekilde değişken tanımı yaptım. Türünü belirttiim kullanmak istedğim yerde componenti import ettikten 
  //sonra değişken ismini {{}} bunun içine yazarak değişkeni istediğim yerden kullanabilirim.
  /**
   * bu class içerisinde oluşturacağımız metot ile function arasındaki fark:
   * bu class içerisinde function oluşturamayız çünkü funksiyonlar function ismiyle birlikte kullanılır.
   * bu class içerisinde metot kullanabilirim çünkü metot yazarken function ismini kullanmama gerek yok.Direk ismini yazarak metot tanımı yapabilirim.
   */
  pStyle:string="purple"
  // metot tanımlama
  clickMe(){
    alert("Beni tıkladın...")
  }
  changeHelloWorldVariable(event:any){
     this.helloWorld=event.target.value
  }
}
