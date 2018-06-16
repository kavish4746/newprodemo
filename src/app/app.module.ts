import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SignupComponent } from './signup/signup.component';
import { EditviewComponent } from './viewprofile/editview/editview.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewprofileComponent,
    SignupComponent,
    EditviewComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
