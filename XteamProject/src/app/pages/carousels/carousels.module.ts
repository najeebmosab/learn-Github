import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselsRoutingModule } from './carousels-routing.module';
import { CarouselsComponent } from './carousels/carousels.component';


@NgModule({
  declarations: [CarouselsComponent],
  imports: [
    CommonModule,
    CarouselsRoutingModule,
    NgbModule
  ],
  exports:[CarouselsComponent]
})
export class CarouselsModule2 { }
