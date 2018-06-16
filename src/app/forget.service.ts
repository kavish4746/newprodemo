import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ForgetService {
 private url:string="http://localhost:3000/forget/";
  constructor(private _http:HttpClient) { }

  getPwd(id:string)
  {
    return this._http.get(this.url+id);
  }

}
