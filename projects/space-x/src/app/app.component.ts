import { Component } from '@angular/core';
import * as data from '../assets/sample.json';
import { SpaceDataService } from './services/space-data.service';

@Component({
  selector: 'spaceX-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spaceX';
  spaceVehicles: any;
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
  constructor(public space: SpaceDataService) {
  }

}
