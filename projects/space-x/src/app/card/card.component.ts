import { Component, OnInit } from '@angular/core';
import * as satelliteData from '../../assets/sample.json';
import { SpaceDataService } from '../services/space-data.service';

@Component({
  selector: 'spaceX-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  constructor(public space: SpaceDataService) { }

}
