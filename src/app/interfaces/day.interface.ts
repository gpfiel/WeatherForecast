import { Injectable } from '@angular/core';

@Injectable()
export class DayInterface {
    dt:string;
    temp:Temperature;
    pressure:number;
    humidity:number;
    weather:Weather;
    speed:number;
    deg:number;
    clouds:number;
    rain:number;
}

export interface Temperature {
    day:number,
    min:number,
    max:number,
    night:number,
    eve:number,
    morn:number
}

export interface Weather {
    id:number,
    main:string,
    description:string,
    icon:string
}