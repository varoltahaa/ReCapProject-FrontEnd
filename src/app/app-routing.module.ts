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
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path : "", component:CarComponent},
  {path : "cars", component:CarComponent},
  {path : "cars/color/:colorId", component:CarComponent},
  {path : "cars/brand/:brandId", component:CarComponent},
  {path : "cars/cardetail/:carId", component:CardetailComponent},
  {path : "cars/filter/:colorId/:brandId", component:CarComponent},
  {path : "cars/payment", component:PaymentComponent},
  {path : "cars/brandadd", component:BrandAddComponent},
  {path : "cars/brandupdate", component:BrandUpdateComponent},
  {path : "cars/brandupdates/:brandId", component:BrandUpdateComponent},
  {path : "cars/caradd", component:CarAddComponent},
  {path : "cars/coloradd", component:ColorAddComponent},
  {path : "cars/carupdate", component:CarUpdateComponent},
  {path : "cars/colorupdate", component:ColorUpdateComponent},
  {path : "rentals", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
