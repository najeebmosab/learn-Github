import { Category } from 'src/app/shared/Model/API/category';
import { ImageProduct } from './image-product';
import { Images } from './images';
export class ProductAPI {

  productId?:number;
  categoryId?:number;
  productName?:string;
  price?:string;
  actualPrice?:string;
  quantity?:string;
  description?:string;
  color?:string;
  counter?:number;
  category?:Category
  imageProduct?:string;

  images?:ImageProduct[]

}
