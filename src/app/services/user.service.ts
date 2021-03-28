import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44392/api/"

  constructor(private httpClient:HttpClient) { }

  getById(id:number){
    let newPath = this.apiUrl + "users/getbyid?id=" + id
    return this.httpClient.get<User>(newPath)
  }

  getByMail(email:string):Observable<User>{
    let newPath = this.apiUrl + "users/getbymail?email="+email
    return this.httpClient.get<User>(newPath)
  }


}
