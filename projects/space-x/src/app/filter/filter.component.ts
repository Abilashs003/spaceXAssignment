import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spaceX-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  yearsList = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  @Output()
  public filterChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
