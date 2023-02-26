import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ErrorPageComponent } from './Components/Error/error-page/error-page.component';
import { AddProductComponent } from './Components/Main/Products/Store/add-product/add-product.component';
import { ProductDetailsComponent } from './Components/Main/Products/Store/product-details/product-details.component';
import { StoreProductsComponent } from './Components/Main/Products/Store/store-products/store-products.component';
import { ProfileComponent } from './Components/Main/Profile/profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'register',component:RegisterComponent},
  {path:'StoreProducts',component:StoreProductsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
