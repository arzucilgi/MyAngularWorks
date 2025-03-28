import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [// import ettiğimiz dosyları alt alta tutuyor(component,directive,pipe   )
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],// paylaşılmayan servicesleri eklemek için kullanılır 
  bootstrap: [AppComponent]
})
export class AppModule { }
