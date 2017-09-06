import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';

import { ForecastService } from './services/forecast.service';

import { DayInterface } from './interfaces/day.interface';
import { DayComponent } from './components/day/day.component';


const appRoutes: Routes = [
  {path:'', component:ForecastComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MomentModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ForecastService,
    DayInterface
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
