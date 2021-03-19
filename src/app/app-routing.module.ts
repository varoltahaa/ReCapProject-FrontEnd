import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/carDetail/cardetail.component';
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
  {path : "rentals", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
