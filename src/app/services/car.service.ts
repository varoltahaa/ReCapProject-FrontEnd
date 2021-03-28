import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44392/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetailbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetailbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarByCarId(carId:string):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  add(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/add",car)
  }

  delete(carDetails:CarDetail){
    return this.httpClient.post(this.apiUrl + "cars/delete" , carDetails)
  }

  update(carDetails:CarDetail){
    return this.httpClient.post(this.apiUrl + "cars/update" , carDetails)
  }


}  