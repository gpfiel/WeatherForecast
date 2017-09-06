import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ForecastService } from './forecast.service';

describe('ForecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ForecastService]
    });
  });

  it('should be created', inject([ForecastService], (service: ForecastService) => {
    expect(service).toBeTruthy();
  }));

  it('should connect to end point', inject([ForecastService], (service: ForecastService) => {
    service.getWeatherForecastByCity('London').subscribe((city) => {
      expect(city).toBeTruthy();
    });
  }));
});