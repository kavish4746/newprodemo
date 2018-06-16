import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Routes } from '@angular/router';
import { view_class } from '../../viewprofile/view_c';
import { ViewprofileService } from '../../viewprofile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.css']
})
export class EditviewComponent implements OnInit {
x:string;
arr:view_class[]=[];
Email_id:string;
Username:string;
Password:string;
Mob_no:number;
City:string;
Gender:string;
Address:string;

  constructor(private _route:Router,private _actroute:ActivatedRoute,private _update:ViewprofileService) { }
onsave(){
  this._update.updateUser(new view_class(this.Email_id,this.Username,this.Password,this.Mob_no,this.City,this.Gender,this.Address)).subscribe(
    (data:any)=>{
      this._route.navigate(['/login'])
    }
  );
}
  ngOnInit() {
    this.x=this._actroute.snapshot.params['id'];
    this._update.getAllUserByEmail_id(this.x).subscribe(
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
