import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PropertyData } from 'src/app/Models/Main/Property/property-data';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {

  baseUrl="http://localhost:8080"
  constructor(private http:HttpClient) { }

  public getData():Observable<PropertyData[]>{
    return this.http.get<PropertyData[]>(`${this.baseUrl}/listProperty`);
  }
}
