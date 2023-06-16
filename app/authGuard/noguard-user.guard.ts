import { CanActivateFn, Router } from '@angular/router';
import { AuthuserService } from '../authservice/authuser.service';
import { inject } from '@angular/core';

export const noguardUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authuser = inject(AuthuserService)


  return new Promise((resolve, reject) => {
    if (authuser.userLoggedIn() == false) {
      resolve(true);
    } else {
      resolve(false);
      router.navigate(['/home'])
    }
  })
};
