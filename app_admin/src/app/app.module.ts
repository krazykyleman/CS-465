import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { HttpClientModule } from '@angular/common/http'; // <-- import HttpClientModule
import { TripsService } from'./services/trips.service';
import { AddTripComponent } from './add-trip/add-trip.component'; // <-- import TripsService
import { ReactiveFormsModule } from '@angular/forms'; // <-- import ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- add HttpClientModule to imports
    ReactiveFormsModule // <-- add ReactiveFormsModule to imports
  ],
  providers: [TripsService], // <-- add TripsService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
