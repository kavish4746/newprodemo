import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { login_class } from '../login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
arr:login_class[]=[];
Email_id:string;
Password:string;
  constructor(private _xyz:LoginService,private _route:Router) { }
onLogin(){
    console.log(this.Email_id,this.Password);
    this._xyz.getUserLogin(new login_class(this.Email_id,this.Password)).subscribe(
      (data:any)=>{
        console.log(data);
        if(data=1)
        {
        prompt("","Login Successfully");
        this._route.navigate(['/viewprofile',this.Email_id])
        }
        else
        {
          prompt("","Invalid Password or Email_id");
        }
      }
    );
}
onforgotpass(){
  this._route.navigate(['/forget',this.Email_id]);
}
onclicksignup(){
  this._route.navigate(['/signup']);
}
  ngOnInit() {
  }

}
