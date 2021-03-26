import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }


  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required && Validators.email],
      password:["",Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        this.toastrService.error(responseError.error,"Başarısız")
      })
    }else{
      this.toastrService.error("Eksik Doldurdunuz","Başarısız")
    }
  }

}
