import { Component, HostListener, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { StoreProductsComponent } from '../store-products/store-products.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
 
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  productView={};
// testing



}
