import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselsModule2 } from '../carousels/carousels.module';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import {CarouselModule} from 'primeng/carousel';

import {CardModule} from 'primeng/card';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    CarouselsModule2,
    CarouselModule,
    FormsModule,
    SliderModule,
    CardModule
  ]
})
export class HomeModule { }
