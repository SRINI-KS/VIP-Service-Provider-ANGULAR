import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValRegisterService {

  constructor() { }
  userRegisterForms:FormGroup=new FormGroup({
    userFname:new FormControl('',[Validators.required]),
    userLname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    gender:new FormControl('',[Validators.required]),
    aadharNum:new FormControl('',[Validators.required,Validators.minLength(12)]),
    panNum:new FormControl('',[Validators.required,Validators.minLength(10)]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    postalCode:new FormControl('',[Validators.required,Validators.minLength(6)]),
    country:new FormControl('',[Validators.required]),
    Category:new FormControl('',[Validators.required])

  })
  
}
