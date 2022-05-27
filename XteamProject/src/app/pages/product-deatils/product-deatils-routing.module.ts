import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDeatilsComponent } from './product-deatils/product-deatils.component';

debugger;
const routes: Routes =
[
    // {path:'',redirectTo:'productdetails/:id',pathMatch:"full"},
    {path:'',component:ProductDeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDeatilsRoutingModule { }
