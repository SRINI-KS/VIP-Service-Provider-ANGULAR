import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Models/Login/LoginClass/login';

@Injectable({
  providedIn: 'root'
})
export class LoginSpringService {

  private UrlLogin = "http://localhost:8080"

  constructor(public http:HttpClient) { }

 public loginValidation(user:Login):Observable<any>{
    return this.http.post<any>(`${this.UrlLogin}/login/loginValidation`, user);

 }
}
