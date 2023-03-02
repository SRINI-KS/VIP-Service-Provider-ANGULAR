import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';
import { LoginComponent } from '../Auth/login/login.component';
import { RegisterComponent } from '../Auth/register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userNameForWelcome:string="";
  profileName:any;


  constructor(private dialog:MatDialog,private router:Router){}

  ngOnInit(): void {
  }

  // register() {
  //   this.dialog.open(RegisterComponent, {
  //     width:"95%",
  //     height:"90%"
  //   });
  // }
  login() {
    this.dialog.open(LoginComponent, {
      width: "30%",
    height: "60%",
    
      
    });
    this.router.navigate(['/'])
  }

  loggedin(){

    this.profileName=JSON.parse(String(localStorage.getItem('UserLogin')))
    if(this.profileName!=null){
   this.userNameForWelcome= this.profileName[0].userFname
    }
    return this.profileName
   
    
  }
  logOut(){
    localStorage.removeItem('UserLogin')
    
  }

 

}
