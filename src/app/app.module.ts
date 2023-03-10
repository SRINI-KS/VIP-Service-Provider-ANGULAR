import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './Modules/material-design/material-design.module';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreProductsComponent } from './Components/Main/Products/Store/store-products/store-products.component';
import { StoreCardComponent } from './Components/Main/Products/Store/store-card/store-card.component';
import { AddProductComponent } from './Components/Main/Products/Store/add-product/add-product.component';
import { ProductDetailsComponent } from './Components/Main/Products/Store/product-details/product-details.component';
import { ErrorPageComponent } from './Components/Error/error-page/error-page.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StoreProductsComponent,
    StoreCardComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ErrorPageComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
    
    
  ],
  providers: [StoreProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
