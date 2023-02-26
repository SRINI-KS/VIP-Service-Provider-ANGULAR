import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';
import { SpringRegisterService } from 'src/app/Services/Auth/Register/Spring-Register/spring-register.service';
import { ValRegisterService } from 'src/app/Services/Auth/Register/valRegister/val-register.service';
import * as alertyfy from 'alertifyjs';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { StepperOrientation } from '@angular/cdk/stepper';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  hide = true;
 

  userRegisterModel: UserRegister = new UserRegister();

   ngOnInit(){
  
    
   }


  constructor(
    public formValidService: ValRegisterService,
    public urlService: SpringRegisterService,
  ) {}
  submitData() {
    this.urlService.createRegister(this.userRegisterModel).subscribe(
      (data) => {
        // this.onClose();
        alertyfy.success("Successfully Registerd")
        // this.login();
      },
      (error: HttpErrorResponse) => {
        alertyfy.error("Registration Failed")
      }
      
    );
  }

  
}
