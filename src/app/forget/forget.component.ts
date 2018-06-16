import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router } from '@angular/router';
import { ForgetService } from '../forget.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
 
 Email_id:string;
 Password:string;
 x:string;
  constructor(private _actroute:ActivatedRoute,private _route:Router,private _abc:ForgetService) { }
  ondone(){
    this._route.navigate(['/login']);
  }
  ngOnInit() {
    this.x=this._actroute.snapshot.params['id'];
    this._abc.getPwd(this.x).subscribe(
      (data:any[])=>{
        this.Email_id=data[0].Email_id;
        this.Password=data[0].Password;
       
      }
    );
  }
}
  
