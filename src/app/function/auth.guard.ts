import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs';

export const authGuard = (next: ActivatedRouteSnapshot ) => {
  return inject(LoginService).currentLoginStatus$.pipe(
    map((currentLogin) => currentLogin ? true : createUrlTreeFromSnapshot(next, ['/', 'login']))
  )
  ;
};
