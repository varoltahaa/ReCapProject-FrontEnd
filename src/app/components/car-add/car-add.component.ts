import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm : FormGroup;
  brands:Brand[];
  colors:Color[];

  constructor(private formBuilder: FormBuilder, private carService:CarService, private brandService:BrandService, private colorService:ColorService ,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrand();
    this.getColor();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["",Validators.required],
      modelYear: ["",Validators.required],
      dailyPrice: ["",Validators.required],
      description: ["",Validators.required]
    });
  }

  getBrand(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands = response.data;
    })
  }

  getColor(){
    this.colorService.getColor().subscribe(response=>{
      this.colors = response.data;
    })
  }

  add(){
    if (this.carAddForm.valid) {
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success("Araç Eklendi","Başarılı");
      })
    }else{
      this.toastrService.error("Formu Eksik Doldurdunuz!","Dikkat")
    }
  }

}
