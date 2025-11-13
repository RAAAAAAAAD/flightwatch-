import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightResponse } from '../models/flight';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class FlightApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.aviationstack.baseUrl;
  private accessKey = environment.aviationstack.accessKey;

  getFlightByNumber(flightNumber: string): Observable<FlightResponse> {
    const params = new HttpParams()
      .set('access_key', this.accessKey)
      .set('flight_iata', flightNumber);

    return this.http.get<FlightResponse>(`${this.baseUrl}/flights`, { params });
  }

  getFlightsByAirport(
    iata: string,
    type: 'departures' | 'arrivals'
  ): Observable<FlightResponse> {
    let params = new HttpParams().set('access_key', this.accessKey);

    if (type === 'departures') {
      params = params.set('dep_iata', iata);
    } else {
      params = params.set('arr_iata', iata);
    }

    return this.http.get<FlightResponse>(`${this.baseUrl}/flights`, { params });
  }
}
