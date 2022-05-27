import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './layout/errors/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselsModule2 } from './pages/carousels/carousels.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SliderModule} from 'primeng/slider';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselsModule2,
    CarouselModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
