import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { PropertyData } from 'src/app/Models/Main/Property/property-data';
import { GeoLocationService } from 'src/app/Services/GeoLoaction/geo-location.service';
import { PropertyDataService } from 'src/app/Services/Main/Property/property-data.service';
import { StoreProductsComponent } from '../store-products/store-products.component';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
// get geo location
// queryData:PropertyData=new PropertyData()
ip='';
productView:PropertyData={
  typeOfWork: '',
  place: '',
  problemDetails: '',
  workStartDate: '',
  workEndDate: '',
  costOfWork: null,
  daysOfWork: null,
  chargesFProvider: null,
  geoLocation: '',
  image: ''
};
 constructor(private getloc:GeoLocationService , private postData:PropertyDataService){}

  ngOnInit() {
navigator.geolocation.getCurrentPosition((position)=>{
  console.log(position.coords.latitude,position.coords.longitude)
})

  }
getLocation(ip:any){
  this.getloc.getLocation(ip).subscribe(
    (Response:any)=>{
      console.log(Response)
    },
    (Error)=>{
      console.log(Error)
    }
    );
    
  
}

getIP(){
  this.getloc.getIP().subscribe(
    (Response:any)=>{
this.ip=Response.ip
console.log(this.ip)
if(Response){
  this.getLocation(this.ip)
}
    }
  )
}

// 
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  

// ----------

addProblemData(){
  this.postData.postDate(this.productView).subscribe(
    (data)=>{
      console.log(data)
      alertyfy.success('Query added Successfully')
    }
  )
}

}
