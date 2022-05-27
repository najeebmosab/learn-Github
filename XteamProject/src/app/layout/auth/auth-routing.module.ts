import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayOutComponent } from './components/auth-lay-out/auth-lay-out.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';

const routes: Routes = [
  {
    path:'',component:AuthLayOutComponent,children:[
      {path:'',component:LoginComponent},
    ]
},
{path:'SingUp',component:SingUpComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
