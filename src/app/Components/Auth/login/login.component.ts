import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Login } from 'src/app/Models/Login/LoginClass/login';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';
import { LoginSpringService } from 'src/app/Services/Auth/Login/LoginSpring/login-spring.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginUser:Login=new Login();
  constructor(public loginService:LoginSpringService,public dialogReference:MatDialogRef<LoginComponent>,private route:Router){}

  login(){
    this.loginService.loginValidation(this.loginUser).subscribe(
      data=>{
        this.onClose()
        this.route.navigate(['/StoreProducts'])
      },
      (error:HttpErrorResponse)=>{
        console.log(error.error.message)
        alert(error.error.message);
      }
    )
  }
  onClose(){
    this.dialogReference.close();
  }
}
