import { LandingLayOutComponent } from './landing-lay-out/landing-lay-out.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

debugger;
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LandingLayOutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../../pages/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'productdetails/:Id',
        loadChildren: () => import('../../pages/product-deatils/product-deatils.module').then(m => m.ProductDeatilsModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../../pages/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../../pages/order/order.module').then(m => m.OrderModule)
      },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
