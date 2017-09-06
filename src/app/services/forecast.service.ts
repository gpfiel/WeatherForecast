import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ForecastService {

  apiKey:string = 'ba68e2c43979c6eabbd33ff8e32c0611';
  apiUrl:string = 'http://api.openweathermap.org/data/2.5/forecast/daily?q={city}&units=metric&cnt=16&appid=';

  constructor(public http:Http) {
  }

  getWeatherForecastByCity(city) {
    var url = this.apiUrl.replace('{city}', city);
    return this.http.get(url + this.apiKey)
      .map(res => res.json());
  }

}
