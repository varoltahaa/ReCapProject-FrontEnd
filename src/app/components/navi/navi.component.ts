import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStoreService } from 'src/app/services/local-store-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  email = this.localStoreService.get('email');
  user:User;
  

  constructor(private authService:AuthService, private toastrService: ToastrService,private localStoreService:LocalStoreService, private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.checkToLogin();
    this.checkToEmail();
    this.getEmail();
  }

  checkToLogin(){
    if (this.authService.isAuthenticated()) {
      return true;
    }else{
      return false;
    }
  }


  checkToEmail(){
    if (this.localStoreService.get("email")) {
      return true;
    }else{
      return false;
    }
  }

  getEmail(){
    if (this.email) {
      this.userService.getByMail(this.email).subscribe(response => {
        this.user = response;
      })
    }
  }
  logOut(){
    this.localStoreService.clean();
  }

}
