import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44392/api/auth/"

  login(login:Login){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login" , login)
  }

  register(register:Register){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "register" , register)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }else{
      return false;
    }
  }

}
