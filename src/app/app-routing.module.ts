import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddProductComponent } from './Components/Main/Products/Store/add-product/add-product.component';
import { ProductDetailsComponent } from './Components/Main/Products/Store/product-details/product-details.component';
import { StoreProductsComponent } from './Components/Main/Products/Store/store-products/store-products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'StoreProducts',component:StoreProductsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
