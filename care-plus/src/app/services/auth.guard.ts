import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const requiredRole = route.data?.['role'] as string;
  
  const token = sessionStorage.getItem('token');
  const roles = JSON.parse(sessionStorage.getItem('role'));

  if (token && roles.includes(requiredRole)) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
