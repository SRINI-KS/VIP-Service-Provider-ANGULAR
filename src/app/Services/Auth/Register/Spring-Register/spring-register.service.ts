import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/Models/Register/Register-Class/user-register';

@Injectable({
  providedIn: 'root'
})
export class SpringRegisterService {

  private UrlRegisteration = "http://localhost:8080/homepage/registration"

  constructor(public httpClient:HttpClient) { }

  createRegister(studentRegi:UserRegister ):Observable<object>
  {
    return this.httpClient.post((this.UrlRegisteration),studentRegi);
  }
  
}
