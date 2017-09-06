import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { DayInterface } from '../../interfaces/day.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

export class ForecastComponent implements OnInit {
  
  city:string = 'Dublin';
  backdrop:boolean = false;
  actualDay:DayInterface;
  days:DayInterface[];
  expand:number = null;

  constructor(private forecastService:ForecastService) {

  }

  ngOnInit() {
    this.refreshApi();
  }

  searchApi() {
    this.refreshApi();
    return false;
  }

  refreshApi() {
    this.backdrop = true;
    this.forecastService.getWeatherForecastByCity(this.city).subscribe((city) => {
      this.days = city.list;
      this.actualDay = this.days.shift();
      let timeoutId = setTimeout(() => {  
        this.backdrop = false;
      }, 1300);
      
    });
  }

  showAll() {
    this.expand = null;
  }
}