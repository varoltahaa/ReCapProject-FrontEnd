import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:CarDetail[] = [];


  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{

    if(params["carId"]){
      this.getCarByCarId(params["carId"])
    }
  })
  }

  getCarByCarId(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response => {this.cardetails = response.data});
  }

  createRental(cardetail:CarDetail){
    this.toastrService.success("Yönlendiriliyorsunuz")
  }






}
