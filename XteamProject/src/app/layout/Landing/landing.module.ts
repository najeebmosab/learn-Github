import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingLayOutComponent } from './landing-lay-out/landing-lay-out.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LandingLayOutComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class LandingModule { }
