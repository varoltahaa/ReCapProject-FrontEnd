import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  brands:Brand[] = [];
  currentCar : Car;
  filterText=""
  dataLoaded = false;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])}
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {this.cars = response.data, this.dataLoaded = true});
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {this.cars = response.data, this.dataLoaded = true});
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response => {this.cars = response.data, this.dataLoaded = true});
  }

  getCarByCarId(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response => {this.cars = response.data});
  }

  setCurrentCar(car:Car){
    this.currentCar = car;
  }

}
