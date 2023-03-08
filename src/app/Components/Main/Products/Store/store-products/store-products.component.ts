import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyData } from 'src/app/Models/Main/Property/property-data';
import { PropertyDataService } from 'src/app/Services/Main/Property/property-data.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.css']
})
export class StoreProductsComponent implements OnInit {
  empty:boolean=false;
  property: Array<PropertyData> = [];


  constructor(private propService:PropertyDataService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getPropertyData(); 
    
    
  }
  public getPropertyData():void{
    this.propService.getData().subscribe(
    
      (response:any)=>{
        this.property=response;
        if(this.property.length<=0){
          this.empty=true;
       }
      },
      (error:HttpErrorResponse)=>{
        // alert(error.error.me ssage);
      }

      );
    
  }
}
