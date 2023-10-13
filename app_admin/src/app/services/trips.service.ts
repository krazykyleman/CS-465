import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private readonly API_BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  public getTrips(): Observable<Trip[]> {

    return this.http.get<Trip[]>('${this.API_BASE_URL}/trips');

  }

}
