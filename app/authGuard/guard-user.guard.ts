import { CanActivateFn, Router } from '@angular/router';
import { AuthuserService } from '../authservice/authuser.service';
import { inject } from '@angular/core';

export const guardUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authuser = inject(AuthuserService);



  return new Promise((resolve, reject) => {
    if (authuser.userLoggedIn() == true) {
      resolve(true);
    } else {
      router.navigate(['/login'])
      resolve(false)
    }
  })
};
