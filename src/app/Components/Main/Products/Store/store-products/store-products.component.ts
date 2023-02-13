import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyData } from 'src/app/Models/Main/Property/property-data';
import { PropertyDataService } from 'src/app/Services/Main/Property/property-data.service';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.css']
})
export class StoreProductsComponent implements OnInit {

  property: Array<PropertyData> = [];


  constructor(private propService:PropertyDataService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getPropertyData(); 
  }
  public getPropertyData():void{
    this.propService.getData().subscribe(
    
      (response:any)=>{
        this.property=response;
        console.log(this.route.snapshot.url.toString())
      },
      (error:HttpErrorResponse)=>{
        // alert(error.error.me ssage);
      }

      );
    
  }
}
