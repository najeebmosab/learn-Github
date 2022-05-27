import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

private API = "https://localhost:44342/api/category";

  getCategory(){
    debugger;
    return this.http.get(this.API);
  }

  getSingleCategory(id){
    debugger;
    return this.http.get(this.API+"/"+id);
  }
}
