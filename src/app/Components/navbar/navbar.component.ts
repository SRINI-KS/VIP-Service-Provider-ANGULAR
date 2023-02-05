import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../Auth/login/login.component';
import { RegisterComponent } from '../Auth/register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dialog:MatDialog){

  }

  register() {
    this.dialog.open(RegisterComponent, {
      width:"95%",
      height:"90%"
    });
  }
  login() {
    this.dialog.open(LoginComponent, {
      width: "30%",
    height: "60%",
      
    });
  }

}
