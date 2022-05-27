import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../Model/API/users';
import { LoginASPService } from './login-asp.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  is_login_in: boolean;
  userID = '';
  constructor(private router: Router, private LOGIN: LoginASPService) {
    this.is_login_in = localStorage.getItem('is_login_in')
      ? true
      : false ;
  }
  // tslint:disable-next-line: typedef
  doLogin() {
    this.is_login_in = true;
    localStorage.setItem('is_login_in', String(this.is_login_in));
  }

  // tslint:disable-next-line: typedef
  LogOut() {
    this.is_login_in = false;
    localStorage.removeItem('is_login_in');
    this.router.navigate(['/login']);
  }
}
