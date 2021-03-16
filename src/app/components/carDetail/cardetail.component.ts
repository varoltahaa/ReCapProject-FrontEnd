import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:CarDetail[] = [];


  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

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


}
