import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const auth2Guard: CanActivateChildFn = (childRoute, state) => {
  const token:string | null  =localStorage.getItem("token")
    const router=inject(Router)
    if(!token){
      router.navigateByUrl("/login")// eğer token yoksa login sayfasında kalıcak 
      return false
    }   
    return true;
};
