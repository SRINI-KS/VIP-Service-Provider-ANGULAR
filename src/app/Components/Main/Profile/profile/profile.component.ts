import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile:any;
  details:UserRegister=new UserRegister;

  ngOnInit(){
    this.profile=JSON.parse(String(localStorage.getItem('UserLogin')))
    console.log(this.profile[0].userFname)
    this.details=this.profile[0]
  }


}
