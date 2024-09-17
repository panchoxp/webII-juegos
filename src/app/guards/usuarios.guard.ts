import { CanActivateFn } from '@angular/router';

export const usuariosGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    window.location.href = "403";
    return false;
  }

  return true;
};