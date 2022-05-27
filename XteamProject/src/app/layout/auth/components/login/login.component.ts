import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/shared/services/auth-login.service';
import { LoginASPService } from 'src/app/shared/services/login-asp.service';
import {PasswordModule} from 'primeng/password';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  constructor(
    // public ServicData: DataServiceService,
    private router: Router,
    private auth: AuthLoginService,
    private service: LoginASPService
  ) {}

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(16),
        // Validators.minLength(6),
        // this.isValidPassword,
      ]),
    });
  }

  isValidPassword(control: AbstractControl): any {
    if (control.value) {
      const regex = /^[A-Z ]/; //*[@#$%]
      if (!regex.test(control.value)) {
        return { invalidPassword: true };
      }
    }
  }
  async login(email, password) {
    let obj ={Email:email,Password:password}
    const res = await this.service.checkUsers(obj);
    sessionStorage.setItem('Token',res);
    let a  = await this.service.getSingelUsers();
    debugger;
    if (a) {
      console.log(a);
      if (this.LoginForm.valid) {
        this.auth.doLogin();
        this.router.navigate(['/landing']);
      }
    }
    console.log(a);
  }
}
