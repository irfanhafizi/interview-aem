import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = this.authService.isAuthenticated();
    const isAuthRoute = state.url.includes('/auth');

    if (isAuthenticated && isAuthRoute) {
      return this.router.createUrlTree(['/dashboard']);
    }

    if (!isAuthenticated && !isAuthRoute) {
      return this.router.createUrlTree(['/auth/login']);
    }

    return true;
  }
  
}
