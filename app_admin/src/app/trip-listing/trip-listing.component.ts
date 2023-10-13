import { Component } from '@angular/core';
import * as tripsData from '../trips';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})

export class TripListingComponent {

  trips = new Array<any>(...tripsData.default);

}
