import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1:any={id:1,brandId:1,colorId:2,modelYear:2015,dailyPrice:200,description:"Dieasel"}
  car2:any={id:2,brandId:2,colorId:4,modelYear:2015,dailyPrice:200,description:"Otomatik"}
  car3:any={id:3,brandId:3,colorId:6,modelYear:2015,dailyPrice:200,description:"Benzinli"}
  car4:any={id:4,brandId:4,colorId:8,modelYear:2015,dailyPrice:200,description:"Son Model"}
  car5:any={id:5,brandId:5,colorId:10,modelYear:2015,dailyPrice:200,description:"Eski Model"}

  cars = [this.car1,this.car2,this.car3,this.car4,this.car5];
  constructor() { }

  ngOnInit(): void {
  }

}
