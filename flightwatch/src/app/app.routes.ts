import { Routes } from '@angular/router';
import { FlightSearchComponent } from './pages/flight-search/flight-search';
import { AirportFlightsComponent } from './pages/airport-flights/airport-flights';
import { FlightDetailComponent } from './pages/flight-detail/flight-detail';

export const routes: Routes = [
  { path: '', component: FlightSearchComponent },
  { path: 'airport', component: AirportFlightsComponent },
  { path: 'flight/:flightNumber', component: FlightDetailComponent },
  { path: '**', redirectTo: '' }
];
