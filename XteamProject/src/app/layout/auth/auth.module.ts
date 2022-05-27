import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayOutComponent } from './components/auth-lay-out/auth-lay-out.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SingUpComponent } from './components/sing-up/sing-up.component';
@NgModule({
  declarations: [AuthLayOutComponent, LoginComponent, SingUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
  ],
})
export class AuthModule {}
