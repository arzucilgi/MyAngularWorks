import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';

export const  homeRoute: Route={
    path:"",// başlangıçta direk home sayfasının açılmasını sağlar
    component:HomeComponent
}

//SAYFALAR LAYOUTS İÇERİSİNDE BELİRTİLEN ALANDA YÜKLENİR 
export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LayoutsComponent,
        children:[ // bu şekilde bütün sayfalarin layput içerisinde belirtilen alana yüklendiğini görürüz
            homeRoute,
            {
                path:"home",// /home sayfasına yönlendiriyor
                component:HomeComponent
            },
            {
                path:"about",
                component:AboutComponent
            },
            {
                 path:"contact",
                 component:ContactComponent
            },
            {
                path:"contact/:params",// bu şekilde gelen bir id yada name değeriyle verilen sayfaya erişim sağlanmış oldu.Ama bunu sistemin 
                //yakalayabilmesi için contact ts  sayfasında contructor ile yaklamamız lazım.
                component:ContactComponent
            }
        ]
    }
];

// SAYFALAR BİZİM BELİRTTİĞİMİZ GİBİ HOME YANI ANASAYFADA YÜKLENİR.

// export const routes: Routes = [
//     //buraya route sayfalarımı obje şeklinde import etcem.

//     homeRoute,
//     {
//         path:"home",// /home sayfasına yönlendiriyor
//         component:HomeComponent
//     },
//     {
//         path:"about",
//         component:AboutComponent
//     },
//     {
//          path:"contact",
//          component:ContactComponent
//     },
//     {
//         path:"contact/:params",// bu şekilde gelen bir id yada name değeriyle verilen sayfaya erişim sağlanmış oldu.Ama bunu sistemin 
//         //yakalayabilmesi için contact ts  sayfasında contructor ile yaklamamız lazım.
//         component:ContactComponent
//     }
// ];



