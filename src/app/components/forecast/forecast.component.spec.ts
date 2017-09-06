import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { MomentModule } from 'angular2-moment';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ForecastComponent } from './forecast.component';
import { DayComponent } from '../day/day.component';

import { ForecastService } from '../../services/forecast.service';


describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastComponent, DayComponent ],
      imports:[ FormsModule, MomentModule, HttpModule ],
      providers: [ForecastService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ForecastComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Weather Forecast');
  }));
});
