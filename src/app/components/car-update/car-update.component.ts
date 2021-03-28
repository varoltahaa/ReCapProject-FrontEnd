import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private carService:CarService,private carDetailService:CardetailService, private brandService:BrandService, private colorService:ColorService, private formBuilder:FormBuilder, activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  carUpdateForm:FormGroup;

  cars:Car[];
  carsDetail:CarDetail[];
  brands:Brand[];
  colors:Color[];

  ngOnInit(): void {
    this.getBrand();
    this.getColor();
    this.getCarDetail();
    this.createCarUpdateForm();

  }


  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required],
      description:["",Validators.required]
    })
  }


  getCarDetail(){
    this.carDetailService.getCars().subscribe(response=>{this.carsDetail = response.data})
  }

  getBrand(){
    this.brandService.getBrand().subscribe(response=> {this.brands = response.data})
  }

  getColor(){
    this.colorService.getColor().subscribe(response => { this.colors = response.data })
  }

  update(){
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({},this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(response=>{
        this.toastrService.success("Araç Güncellendi","Başarılı");
      })
    }else{
      this.toastrService.error("Formu Eksik Doldurdunuz!","Dikkat")
    }
  }

}
