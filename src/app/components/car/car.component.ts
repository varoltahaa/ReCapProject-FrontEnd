import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carDetails:CarDetail[] = [];
  brands:Brand[] = [];
  currentCar : CarDetail;
  filterText=""
  dataLoaded = false;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private carDetailService:CardetailService, private toastrService:ToastrService) { }

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
    this.carService.getCars().subscribe(response => {this.carDetails = response.data, this.dataLoaded = true});
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {this.carDetails = response.data, this.dataLoaded = true});
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response => {this.carDetails = response.data, this.dataLoaded = true});
  }

  getCarByCarId(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response => {this.carDetails = response.data});
  }

  setCurrentCar(cardetail:CarDetail){
    this.currentCar = cardetail;
  }

  delete(cardetail:CarDetail){
    this.carService.delete(cardetail).subscribe(response => {this.toastrService.error("Araç Başarıyla Silindi")})
    setTimeout(() => { window.location.reload(); }, 2000); 
  }

}
