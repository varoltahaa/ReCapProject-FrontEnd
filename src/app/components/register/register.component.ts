import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Validators,FormControl,FormBuilder,FormGroup } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup

  constructor(private toastrService:ToastrService,private authService:AuthService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required && Validators.email],
      password:["",Validators.required]
    })
  }

  register(){
    if (this.registerForm.valid) {
      let registerModel = Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
        
      },reponseError => {
        this.toastrService.error(reponseError.error,"Başarısız")
      })
    }else{
      this.toastrService.error("Eksik Doldurdunuz","Başarısız")
    }
  }

}
