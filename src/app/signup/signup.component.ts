import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { signup_c } from '../signup/signup_class';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _xyz:SignupService,private _route:Router) { }
arr:signup_c[]=[];
Email_id:string;
Username:string;
Password:string;
Mob_no:number;
City:string;
Gender:string;
Address:string;
  ngOnInit() {
  }
  onAdd(){
    
    this._xyz.addUser(new signup_c(this.Email_id,this.Username,this.Password,this.Mob_no,this.City,this.Gender,this.Address)).subscribe(
      (data:signup_c[])=>{
        console.log(data);
        this.arr.push(new signup_c(this.Email_id,this.Username,this.Password,this.Mob_no,this.City,this.Gender,this.Address));
        this._route.navigate(['/login']);
      });
}

}