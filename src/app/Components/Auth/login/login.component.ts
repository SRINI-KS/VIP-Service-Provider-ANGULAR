import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login/LoginClass/login';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';
import { LoginSpringService } from 'src/app/Services/Auth/Login/LoginSpring/login-spring.service';
import * as alertyfy from 'alertifyjs';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sendUserName:string="";
   userDetails:UserRegister={};
   loginUserLocalStore: UserRegister = new UserRegister;
  loginUser:Login=new Login();
  constructor(public loginService:LoginSpringService,public dialogReference:MatDialogRef<LoginComponent>,private route:Router,private dialog:MatDialog){}
  ngOnInit(): void {
  
  }
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
    this.sendUserName=String(this.userDetails.userFname)
    console.log(this.userDetails.userFname)
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
  register() {
    this.dialog.closeAll()
    this.dialog.open(RegisterComponent, {
      width:"95%",
      height:"90%"
    });
  }
}
