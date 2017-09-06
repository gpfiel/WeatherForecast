import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  inputs: ['counter', 'expand', 'day', 'today']
})
export class DayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}