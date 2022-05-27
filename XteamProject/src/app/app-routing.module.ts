import { LandingRoutingModule } from './layout/landing/landing-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthModule } from './layout/auth/auth.module';
import { NotFoundComponent } from './layout/errors/not-found/not-found.component';
import { AuthLogInGuard } from './shared/guards/auth-log-in.guard';
import { LandingModule } from './layout/landing/landing.module';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},

    {
      path: 'login',
      loadChildren: () => import('./layout/auth/auth.module').then(m => AuthModule),
    },
    {
      canActivate:[AuthLogInGuard],
      path: 'landing',
      loadChildren: () => import('./layout/landing/landing.module').then(m => LandingModule),
    },
    {
      path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
