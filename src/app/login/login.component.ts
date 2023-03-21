import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // loginMail : string = "admin";
  // loginPwd : string = "admin";

  signUpUsers : any[] =[
    {email: "admin", pwd: "admin"}
  ];

  signUpObj: any = {
    email: '',
    pwd: ''
  };

  loginObj: any = {
    email: '',
    pwd: ''
  };

  constructor(private router:Router){}

  ngOnInit(): void{
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signUpUsers = JSON.parse(localData);
    }
  }

  //Function for sign up details
  checkSignUp(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signUpObj = {
      email: '',
      pwd: ''
    };
    alert("USER ADDED SUCCESSFULLY! YOU CAN NOW LOGIN!")
  }

  _email : string = "";
  _pwd : string = "";

  //Function to validate log in details
  checkLogin(){
    const isValidUser = this.signUpUsers.find(u => u.email == this._email && u.pwd == this._pwd);
    if(isValidUser != undefined){
      this.router.navigate(['/Services']);
    }
    else{
      alert("INVALID DETAILS! TRY AGAIN!");
    }
  }
  
}