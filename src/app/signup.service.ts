import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { signup_c } from './signup/signup_class';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url:string='http://Localhost:3000/signup/';
  constructor(private _http:HttpClient) { }
  addUser(item:signup_c){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1})
}
}
