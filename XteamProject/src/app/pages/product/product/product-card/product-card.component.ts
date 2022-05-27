
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [NgbRatingConfig]
})
export class ProductCardComponent implements OnInit {
  constructor(private cartService : CartService,config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    // config.readonly = true;
  }
  currentRate = 8;
  ngOnInit(){

  }
//  addToCart(){
//    debugger;

//   this.item.itemCount = this.itemNumber;
//   this.productsService.Products.find((p)=> p.Id === this.item.Id ?(p.itemCount =this.itemNumber ):null);
//   this.cartService.addItemToCart(this.item);
//   }


}
