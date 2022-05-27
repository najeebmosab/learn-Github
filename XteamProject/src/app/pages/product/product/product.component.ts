import { Category } from './../../../shared/Model/API/category';
import { CartService } from 'src/app/shared/services/cart.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ProductAPI } from 'src/app/shared/Model/API/product-api';
import { ProductAPIService } from 'src/app/shared/services/product-api.service';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { ImagesService } from 'src/app/shared/services/images.service';
import { Images } from 'src/app/shared/Model/API/images';
import { LoginASPService } from 'src/app/shared/services/login-asp.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ImageProduct } from 'src/app/shared/Model/API/image-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @ViewChild(ProductCardComponent) widthes: ProductCardComponent;

  sortOrder: number;

  sortField: string;

  Search = '';

  view = 'grid';

  // async addProduct() {
  //   let postProductForPush: BlogForService = Object.assign(
  //     {},
  //     this.postProduct
  //   );
  //   this.postProduct = await this.service.addProduct(postProductForPush);
  //   this.getProducts();
  // }

  constructor(
    private productServiceAPI: ProductAPIService,
    private primengConfig: PrimeNGConfig,
    private imagesService:ImagesService,
    private cartService :CartService,
    private user:LoginASPService,
    private category:CategoryService
  ) {} //public service: ProductsService,public service: ProductAPIService
  productDatas: ProductAPI[] = [{}];
  sortOptions: SelectItem[];
  categoryAPI:Category;
  ngOnInit(): void {
    this.getProducts();
    this.GetCategory();

  }

  async getProducts() {
    await this.productServiceAPI
      .getProducts()
      .then((data) => (this.productDatas = data));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];

    this.primengConfig.ripple = true;
    console.log(this.productDatas);
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  async GetCategory()
{
  this.categoryAPI =    await this.category.getCategory().toPromise();
}
async GetSingleCategory(id)
{
  let res:Category =    await this.category.getSingleCategory(id).toPromise();
  this.productDatas = res?.products
  console.log(this.productDatas,"Category")
}

imge:Images={};
  async ShowImages(product:ImageProduct)
  {
    debugger
    if(this.productDatas != null && product != null && product != [])
    {
    console.log(product);
   this.imge = await this.imagesService.GETSingleImage(product[0]?.imageId);
    return this.imge.path
  }
  }



  // getProducts() {
  //   this.service.getProducts().subscribe((data: BlogForService[]) => {
  //     this.toSaveData = data;
  //     console.log(this.toSaveData);
  //   });
  // }

  // getProducts() {
  //   this.service.getProducts().subscribe((data: ProductAPI[]) => {
  //     this.toSaveData = data;
  //     console.log(this.toSaveData);
  //   });
  // }

  switchOpNum = true;
  switchOpChr = true;
  // Sorted(op) {
  //   switch (op) {
  //     case 0:
  //       if (this.switchOpNum == true) {
  //         this.toSaveData.sort((a, b) => Number(a.price) -  Number(b.price));
  //         this.switchOpNum = false;
  //         document.getElementById('num').innerText = '0 - 9';
  //       }

  //       else {
  //         this.toSaveData.sort((a, b) => Number(b.price) - Number(a.price));
  //         this.switchOpNum = true;
  //         document.getElementById('num').innerText = '9 - 0';
  //       }
  //       break;

  //     case 'A':
  //       if (this.switchOpChr == true) {
  //         this.toSaveData.sort(
  //           (n1, n2) =>
  //             n1.productName.toString()[0].toLowerCase().charCodeAt(0) -
  //             n2.productName.toString()[0].toLowerCase().charCodeAt(0)
  //         );

  //         this.switchOpChr = false;
  //         document.getElementById('chr').innerText = 'Z - A';

  //       } else {
  //         this.toSaveData.sort(
  //           (n1, n2) =>
  //           n2.productName.toString()[0].charCodeAt(0) -   n1.productName.toString()[0].charCodeAt(0)
  //         );

  //         this.switchOpChr = true;
  //         document.getElementById('chr').innerText = 'A - Z';
  //       }
  //       break;
  //   }

  // }
}
