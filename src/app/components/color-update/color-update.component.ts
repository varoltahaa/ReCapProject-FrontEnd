import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

 
  constructor(private colorService:ColorService,private toastrService:ToastrService,private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder) { }
  colorsDelete:Color[] = [];
  colorUpdateForm:FormGroup;



  ngOnInit(): void {
    this.getColor();    
  }

  createBrandUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorId:["",Validators.required],
      colorName:["",Validators.required]
    })
  }

  getColor(){
    this.colorService.getColor().subscribe(response => {this.colorsDelete = response.data});
  }


  delete(color:Color) {
    this.colorService.delete(color).subscribe((response) => {
      this.toastrService.error("Renk Başarıyla Silindi");
      setTimeout(() => { window.location.reload(); }, 500);
    })
  }

}
