import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { LocalStoreService } from 'src/app/services/local-store-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  email = this.localStoreService.get('email');
  id = this.localStoreService.get("id")
  user:User[];

  profilUpdateGroup:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private toastrService:ToastrService, private localStoreService:LocalStoreService) { }

  ngOnInit(): void {
    this.createProfilUpdateForm();
  }

  createProfilUpdateForm(){
    this.profilUpdateGroup = this.formBuilder.group({
      id:[this.id,Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:[this.email,Validators.required],
      password:["",Validators.required],
    })
  }



  update(){
    this.profilUpdateGroup.valid 
       console.log(this.profilUpdateGroup.value)
  }




}
