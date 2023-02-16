import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Login } from 'src/app/Models/Login/LoginClass/login';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';
import { LoginSpringService } from 'src/app/Services/Auth/Login/LoginSpring/login-spring.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   userDetails:UserRegister={};
   loginUserLocalStore: UserRegister = new UserRegister;
  loginUser:Login=new Login();
  constructor(public loginService:LoginSpringService,public dialogReference:MatDialogRef<LoginComponent>,private route:Router){}
  
  login(){
    this.loginService.loginValidation(this.loginUser).subscribe(
      (response:Login)=>{
        this.loginUserLocalStore=response
        this.onClose()
        this.route.navigate(['/StoreProducts'])
        alertyfy.success("login")
        this.local();
        
       
      },
      (error:HttpErrorResponse)=>{
        alertyfy.error("invalid")
      }
    )
  }
  onClose(){
    this.dialogReference.close();
  }

  local(){
    this.userDetails=Object.assign(this.userDetails,this.loginUserLocalStore)
    this.addUserToLocal(this.userDetails)

  }

  addUserToLocal(userDetails: UserRegister){
         let userLoginInfo=[]
         if(localStorage.getItem('userLoginInfo')){
          userLoginInfo=JSON.parse(String(localStorage.getItem('userLoginInfo')));
          userLoginInfo=[userDetails,...userLoginInfo]
         }
         else{
          userLoginInfo=[userDetails]
         }

    localStorage.setItem('UserLogin',JSON.stringify(userLoginInfo));
  }
}
