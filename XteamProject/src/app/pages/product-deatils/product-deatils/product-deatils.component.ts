import { ProductAPI } from './../../../shared/Model/API/product-api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductAPIService } from 'src/app/shared/services/product-api.service';
import { Images } from 'src/app/shared/Model/API/images';

@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.css'],
})
export class ProductDeatilsComponent implements OnInit {
  idProduct: number;
  product:ProductAPI;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private pro:  ProductAPIService
  ) {}
imgData:Images[];
  ngOnInit(): void {
    this.idProduct = Number(this.route.snapshot.paramMap.get('Id'));
    this.GETSingleProduct();
  }

  async GETSingleProduct()
  {
    this.product = await this.pro.GETSingleProduct(this.idProduct);
    //this.imgData = this.product.images;
    console.log(this.imgData,'img');
    console.log(this.product);
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
  }

  ShowImages(product:Images)
  {
    debugger
    if(product != null && product != [])
    {
    console.log(product);
    return product[0]?.path || undefined;
  }
  }
}
