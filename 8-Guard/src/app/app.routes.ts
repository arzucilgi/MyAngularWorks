import { Routes } from '@angular/router';
import { HomwComponent } from './homw/homw.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    {
        path:"",
        component:LayoutsComponent,
        canActivateChild:[authGuard],
        children:[
            {
                path:"",
               // canActivate:[authGuard],// bu canactiivate için geçerli ama bunu canactivatechild için kullanamayız.
               canDeactivate:[checkGuard],
                component:HomwComponent
            },

        ]

    },
    {
        path:"login",
        component:LoginComponent
    }
];
