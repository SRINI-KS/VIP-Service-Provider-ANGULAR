import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {


  

  constructor(public http:HttpClient) { }

 public getLocation(ip:any):Observable<any>{
  console.log(ip)
  let url = 'http://api.ipstack.com/${ip}?access_key=1af959a449722e7e16b1cfe07392eea6';
  return this.http.get(url)
  //   return this.http.get('https://jsonip.com/').pipe(
  //    switchMap((value: any) => {
  //      this.userIp = value.ip;
  //      let url = 'http://api.ipstack.com/${value.ip}?access_key=6af4e62661376468ae1d962df423f26d';
  //      return this.http.get(url);
  //    })
  //  );

 }

 public getIP():Observable<any>{
  return this.http.get<any>('https://jsonip.com/')
}
}
