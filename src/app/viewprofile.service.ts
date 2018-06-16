import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { view_class } from './viewprofile/view_c';

@Injectable({
  providedIn: 'root'
})
export class ViewprofileService {
  private url:string='http://Localhost:3000/viewprofile/';
  constructor(private _http:HttpClient) { }
  
  getAllUserByEmail_id(id:string)
  {
    return this._http.get(this.url+id);
  }
  updateUser(item:view_class){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.Email_id,body,{headers:head1})
  }
}
