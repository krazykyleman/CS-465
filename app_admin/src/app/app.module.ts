import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TripsService } from './services/trips.service';
import { AddTripComponent } from './add-trip/add-trip.component';

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
    HttpClientModule
  ],
  providers: [TripsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
