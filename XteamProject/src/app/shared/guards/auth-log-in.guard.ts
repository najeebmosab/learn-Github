import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../services/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLogInGuard implements CanActivate {
  constructor(private authService:AuthLoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.is_login_in)
      {
        this.router.navigate(['/login']);
      }
    return this.authService.is_login_in;
  }


}
