import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginMail : string = "admin";
  loginPwd : string = "admin";

  checkLogin(){
    
  }
  
}