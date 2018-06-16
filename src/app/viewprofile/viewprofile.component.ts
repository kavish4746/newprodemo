import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute } from '@angular/router';
import { view_class } from '../viewprofile/view_c';
import { ViewprofileService } from '../viewprofile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  arr:view_class[]=[];
  Email_id:string;
  Username:string;
  Password:string;
  Mob_no:number;
  City:string;
  Gender:string;
  Address:string;
  x:string;
  constructor(private _route:Router,private _data:ViewprofileService,private _acroute:ActivatedRoute) { }
onEdit(item:view_class){
  this._route.navigate(['/editview',this.Email_id])
}
  ngOnInit() {
    this.x=this._acroute.snapshot.params['id'];
    this._data.getAllUserByEmail_id(this.x).subscribe(
      (data:view_class[])=>{
        this.Email_id=data[0].Email_id;
        this.Username=data[0].Username;
        this.Password=data[0].Password;
        this.Mob_no=data[0].Mob_no;
        this.City=data[0].City;
        this.Gender=data[0].Gender;
        this.Address=data[0].Address;
      }
    );
  }

}
