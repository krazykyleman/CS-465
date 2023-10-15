import { Component, OnInit } from '@angular/core'; // <-- import OnInit
import { Trip } from '../models/trip'; // <-- import Trip interface
import { TripsService } from '../services/trips.service'; // <-- import TripsService
import { Router } from'@angular/router'; // <-- import Router


@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})


export class TripListingComponent implements OnInit {

  trips: Trip[] = []; // <-- initialize trips array

  constructor(private tripsService: TripsService, private router: Router) { } // <-- inject TripsService and Router

  ngOnInit(): void { // <-- call getTrips() method on initialization

    this.tripsService.getTrips() // <-- call getTrips() method
    
      .subscribe({ // <-- subscribe to Observable

        next: results => this.trips.push(...results), // <-- push results to trips array
        error: err => console.error(err) // <-- handle error

      });

  }

  addTrip() {

    this.router.navigate(['add-trip']); // <-- navigate to add-trip route

  }

}
