import { CanDeactivateFn } from '@angular/router';
import { HomwComponent } from './homw/homw.component';

export const checkGuard: CanDeactivateFn<HomwComponent> = (component, currentRoute, currentState, nextState) => {

  //HomeComponent içerisinde değişken veya fonksiyon tanımlayıp bu fonksiyonu bunun içinde kullanmak istiyorsak component. deyip
  // istdiğimizi seçip return olarak onu döndürebiliriz.
  var result= confirm("sayfadan çıkmak istiyor musunuz?")
  return result;// return true ise sayfadan çıkmaya izin verir return true değilse izin vermez



};
