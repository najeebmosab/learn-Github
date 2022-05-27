import { ProductAPI } from './../../../shared/Model/API/product-api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { LoginASPService } from 'src/app/shared/services/login-asp.service';
import { Images } from 'src/app/shared/Model/API/images';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  items: any;
  constructor(public cartService: CartService,public router:Router,private user:LoginASPService) {}
  products:ProductAPI[]=[];
  cartItemsCount = 0; // count of item in cart
  cartItemsPrice = 0; // Total Price in cart
  private _cartItem: ProductAPI[] = [];




  async ngOnInit(): Promise<void> {
    await this.user.getSingelUsers();
    this.products = JSON.parse(localStorage.getItem(this.user.res?.userId.toString()));
    console.log(this.products);
    console.log(this.cartService.cartItems);

  }

  ShowImages(product:Images)
  {
    debugger
    if(this.products != null && product != null && product != [])
    {
    console.log(product);
    return product[0]?.path || undefined;
  }

  }
  removeItemFromCart(item:ProductAPI)
  {
    debugger;
    this.items = this.cartService.removeItemFromCart(item);
    this.ngOnInit();
 }

 AddToCart(obj,op)
 {
   debugger;
   if(this.cartService.cartItems != null)
   {
   const index = this.cartService.cartItems.findIndex(i => i.productId === obj.productId || null);
    index >= 0 ? obj =  this.cartService.cartItems[index] :obj.counter = 0;
   }
   else{

     if(obj.counter != null )
     {
       obj.counter = obj.counter;
     }
     else
     {
       obj.counter = 0;
     }
   }
     this.cartService.addItemToCart(obj,op);
     this.ngOnInit();
 }

}
