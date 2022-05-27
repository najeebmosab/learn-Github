import { Users } from 'src/app/shared/Model/API/users';
import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/shared/services/auth-login.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { LoginASPService } from 'src/app/shared/services/login-asp.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isShown = false;
  constructor(private authLoginService:AuthLoginService,public cartService : CartService,private Login:LoginASPService) { }
  // res = this.sum.count;
  visibleSidebar1 = true;
  user:Users;
  userName="";
  async ngOnInit() {
      this.user =   await this.Login.getSingelUsers();
      this.userName = this.user.username;
      this.cartService.cartItems = JSON.parse(localStorage.getItem(this.Login.res.userId.toString()));
      try{
      this.cartService.update_cart_Items_Count_Price();
    }
    catch{
      console.log("it's null");
    }
  }

  LogOut(){
    this.authLoginService.LogOut();
  }

  // updateCartItem(op:string,item:any){

  //   switch(op)
  //   {
  //     case'+':
  //     item.itemCount++;
  //     break

  //     case '-':
  //       item.itemCount--;
  //       break;
  //   }
  //   this.cartService.addItemToCart(item);
  // }
}
