import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductAPI } from '../Model/API/product-api';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {
  constructor(private http: HttpClient) {}
  private API = 'https://localhost:44342/api/Products';

  async getProducts():Promise<any> {
    debugger;
    return await this.http.get(this.API).toPromise();
  }

  async GETSingleProduct(id:number)
  {
    return await this.http.get(this.API+"/"+id).toPromise();
  }


}
