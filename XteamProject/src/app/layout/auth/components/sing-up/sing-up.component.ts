import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Users } from 'src/app/shared/Model/API/users';
import { LoginASPService } from 'src/app/shared/services/login-asp.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent implements OnInit {
  constructor(private http: LoginASPService) {}
  user: Users = {};
  userName = '';
  password = '';
  confarmPassword = '';
  email = '';
  isAdmin = false;
  ngOnInit(): void {}

  AddUser() {
    debugger;
    const regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})./;
    if (!regex.test(this.userName)) {
      console.log(true);

    } else {
      console.log(false);

    }

    this.user.username = this.userName;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.isAdmin = this.isAdmin;
    this.http.AddUser(this.user);
  }
}
