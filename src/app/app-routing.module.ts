import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/carDetail/cardetail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path : "", component:CarComponent},
  {path : "cars", component:CarComponent},
  {path : "cars/color/:colorId", component:CarComponent},
  {path : "cars/brand/:brandId", component:CarComponent},
  {path : "cars/cardetail/:carId", component:CardetailComponent},
  {path : "cars/filter/:colorId/:brandId", component:CarComponent},
  {path : "cars/payment", component:PaymentComponent},
  {path : "cars/brandAdd", component:BrandAddComponent, canActivate:[LoginGuard]},
  {path : "cars/brandupdate", component:BrandUpdateComponent, canActivate:[LoginGuard]},
  {path : "cars/brandupdates/:brandId", component:BrandUpdateComponent},
  {path : "cars/carAdd", component:CarAddComponent, canActivate:[LoginGuard]},
  {path : "cars/colorAdd", component:ColorAddComponent, canActivate:[LoginGuard]},
  {path : "cars/carupdate", component:CarUpdateComponent, canActivate:[LoginGuard]},
  {path : "cars/colorupdate", component:ColorUpdateComponent, canActivate:[LoginGuard]},
  {path : "login", component:LoginComponent},
  {path : "register", component:RegisterComponent},
  {path : "rentals", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
