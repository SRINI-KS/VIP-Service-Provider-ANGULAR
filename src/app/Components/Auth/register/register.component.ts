import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';
import { SpringRegisterService } from 'src/app/Services/Auth/Register/Spring-Register/spring-register.service';
import { ValRegisterService } from 'src/app/Services/Auth/Register/valRegister/val-register.service';
import * as alertyfy from 'alertifyjs';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;

  userRegisterModel: UserRegister = new UserRegister();
  constructor(
    public formValidService: ValRegisterService,
    public urlService: SpringRegisterService,
    public dialogReference: MatDialogRef<RegisterComponent>,
    private dialog:MatDialog
  ) {}
  submitData() {
    this.urlService.createRegister(this.userRegisterModel).subscribe(
      (data) => {
        this.onClose();
        alertyfy.success("Successfully Registerd")
        this.login();
      },
      (error: HttpErrorResponse) => {
        alertyfy.error("Registration Failed")
      }
      
    );
  }
  onClose() {
    this.dialogReference.close();
  }
  login() {
    this.dialog.open(LoginComponent, {
      width: "30%",
    height: "60%",
      
    });
  }
}
