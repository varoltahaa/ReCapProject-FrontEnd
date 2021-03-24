import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  constructor(private brandService:BrandService,private toastrService:ToastrService,private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder) { }
  brandsUpdate:Brand[] = [];
  brandsDelete:Brand[] = [];
  brandUpdateForm:FormGroup;



  ngOnInit(): void {
    this.getBrand();    
  }

  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required]
    })
  }

  getBrand(){
    this.brandService.getBrand().subscribe(response => {this.brandsUpdate = response.data});
  }

  update(){
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({},this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success("Marka Güncellendi","Başarılı");
      })
    }else{
      this.toastrService.error("Formu Eksik Doldurdunuz!","Dikkat")
    }
  }

  delete(brand:Brand) {
    this.brandService.delete(brand).subscribe((response) => {
      this.toastrService.error("Marka Başarıyla Silindi");
      setTimeout(() => { window.location.reload(); }, 500);
    })
  }

}
