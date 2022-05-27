import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { OnScrollDirective } from './directive/on-scroll.directive';



@NgModule({
  declarations: [
    FilterPipe,
    OnScrollDirective,

  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
   exports:[
    FilterPipe,
    OnScrollDirective
  ]
})
export class SharedModule { }
