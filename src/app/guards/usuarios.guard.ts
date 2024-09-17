import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const usuariosGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = sessionStorage.getItem('login') === 'true';

  if (!isLoggedIn) {
    router.navigate(['/403']);
    return false;
  }
  return true;
};

