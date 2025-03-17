import { Component, ViewEncapsulation } from "@angular/core";
// bu yapıyı oluşturmak için @Component bu ismi yazarsak otomatik oluşuyor.
@Component({
    // bunun içerisine property yazılacak.
    selector:"app-about",
    standalone:true,
    templateUrl:'./about.components.html', /** Bu ikisi zorunlu alandır.Doldurulması lazım */
    styleUrl:'./about.components.css',
    imports:[],// dış kaynaklardan bir şeyler import etmek için kullanılır
    providers:[],//servisleri dahil etmek için kullanılır 
    encapsulation:ViewEncapsulation.None// html çıktılarındaki propertyleri yönetmemizi sağlar 
})

export class AboutComponent{

}