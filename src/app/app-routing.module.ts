import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StoreProductsComponent } from './Components/Main/Products/Store/store-products/store-products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'StoreProducts',component:StoreProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
