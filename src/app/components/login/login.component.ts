import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStoreService } from 'src/app/services/local-store-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService, private localStoreService:LocalStoreService) { }

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
        setTimeout(() => { window.location.reload(); }, 1);
        this.toastrService.success(response.message,"Başarılı")
        this.localStoreService.set("token",response.data.token);
        this.localStoreService.set("email",this.loginForm.value.email); 
      },responseError=>{
        this.toastrService.error(responseError.error,"Başarısız")
      })
    }else{
      this.toastrService.error("Eksik Doldurdunuz","Başarısız")
    }
  }

}
