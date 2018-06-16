import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditviewComponent } from './viewprofile/editview/editview.component';
import { ForgetComponent } from './forget/forget.component';
const arr:Routes=[
    
            {path:'',component:LoginComponent},
            {path:'login',component:LoginComponent},
            {path:'signup',component:SignupComponent},
            {path:'viewprofile/:id',component:ViewprofileComponent},
            {path:'editview/:id',component:EditviewComponent},
            {path:'forget/:id',component:ForgetComponent}

];    

export const routing=RouterModule.forRoot(arr);