import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {}

  async getImages():Promise<any>
  {
    return await this.http.get("https://localhost:44342/api/Images").toPromise();
  }
  async GETSingleImage(id:number):Promise<any>
  {
    debugger;
    return await this.http.get("https://localhost:44342/api/Images/"+id).toPromise();
  }
}
