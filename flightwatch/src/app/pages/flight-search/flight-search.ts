import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlightApiService } from '../../services/flight-api';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, CommonModule],
  templateUrl:'./flight-search.html',
  styleUrl: './flight-search.css'
})
export class FlightSearchComponent {
  private api = inject(FlightApiService);
  private router = inject(Router);

  flightNumber = '';
  loading = false;
  error: string | null = null;
  results: Flight[] = [];
  searched = false;

  onSearch() {
    const trimmed = this.flightNumber.trim();
    if (!trimmed) {
      this.error = 'Inserisci un numero di volo.';
      this.results = [];
      this.searched = true;
      return;
    }

    this.loading = true;
    this.error = null;
    this.results = [];
    this.searched = true;

    this.api.getFlightByNumber(trimmed).subscribe({
      next: res => {
        this.results = res.data ?? [];
        if (this.results.length === 0) {
          this.error = `Nessun volo trovato per ${trimmed}.`;
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Errore nel recupero dei dati. Riprova più tardi.';
        this.loading = false;
      }
    });
  }

  getStatusClass(status: string | null): string {
    switch ((status || '').toLowerCase()) {
      case 'active':
      case 'scheduled':
        return 'status status-ok';
      case 'landed':
        return 'status status-landed';
      case 'cancelled':
        return 'status status-cancelled';
      case 'delayed':
        return 'status status-delayed';
      default:
        return 'status';
    }
  }

  goToDetail(flight: Flight) {
    const num = flight.flight?.iata;
    if (num) {
      this.router.navigate(['/flight', num]);
    }
  }
}
