import { ProductAPI } from 'src/app/shared/Model/API/product-api';
import { Injectable, OnInit } from '@angular/core';
import { isTemplateMiddle } from 'typescript';

import { Users } from '../Model/API/users';
import { LoginASPService } from './login-asp.service';


@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  clearCart(): any {
    throw new Error('Method not implemented.');
  }
cartItemsCount = 0; // count of item in cart
 cartItemsPrice = 0; // Total Price in cart
 private _cartItem: ProductAPI[] = [];
constructor(private user:LoginASPService) {

}
  ngOnInit(): void {
     this._cartItem;
  }

 set cartItems(cartItems: ProductAPI[] )
 {
  this._cartItem = cartItems;
 }

get cartItems(){
  debugger;
  if(this._cartItem == null)
  {
    this._cartItem =[];
  }
   return this._cartItem;

 }



 addItemToCart(item:ProductAPI,op:string){

   debugger;
   switch(op)
   {
     case "+":
       item.counter+=1;
       break;
     case "-":
         item.counter-=1;
         break;
   }
 if (Number(item.quantity)  > 0 && item.counter > 0)
   {

    const index = this.cartItems.findIndex(i => i.productId === item.productId);
     index >= 0 ? this.cartItems[index] = item : this.cartItems.push(item);
     localStorage.setItem(this.user.res.userId.toString(),JSON.stringify(this.cartItems));
}
    else{this.removeItemFromCart(item);}
  this.update_cart_Items_Count_Price();
 }
  removeItemFromCart(item:ProductAPI)
  {
    const index = this.cartItems.findIndex((i) => i.productId === item.productId);
   this.cartItems.splice(index,1);
   this.update_cart_Items_Count_Price();
 }


 update_cart_Items_Count_Price(){
   this.cartItemsCount = 0;
   this.cartItemsPrice = 0;

   this.cartItems.forEach(item => this.cartItemsCount += Number(item.counter));
   this.cartItems.forEach(item => this.cartItemsPrice += Number(item.price)   *  Number(item.counter));
   localStorage.setItem(this.user.res.userId.toString(),JSON.stringify(this.cartItems));
 }
}
