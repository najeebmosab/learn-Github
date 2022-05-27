import { Users } from 'src/app/shared/Model/API/users';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { promise } from 'protractor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginASPService {

  constructor(private http:HttpClient) { }

  private endPoint : string = "https://localhost:44342/api/User/Auth";//https://localhost:44342/api
   res:Users;
  async checkUsers(obj:object):Promise<any>{
    debugger;
    let headers = new HttpHeaders().append('Content-Type', 'application/json;charset=utf-8');
   return await this.http.post(this.endPoint,obj,{responseType: 'text' }).toPromise<any>();
  }

  async getSingelUsers(){
    debugger;
    let headers = new HttpHeaders().append('Authorization', sessionStorage.getItem('Token') );
        headers.append('Content-Type', 'application/json');
      this.res =  await this.http.get("https://localhost:44342/api/User/",{headers:headers}).toPromise<any>();
      return this.res;

}

async AddUser(obj:Users){
  debugger;
  return  await this.http.post("https://localhost:44342/api/User/",obj).toPromise<any>();


}
}
