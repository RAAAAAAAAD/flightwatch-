import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FlightApiService } from '../../services/flight-api';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './flight-detail.component.html',
  styleUrl: './flight-detail.component.css'
})
export class FlightDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(FlightApiService);

  flightNumber = '';
  flight: Flight | null = null;
  loading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.flightNumber = this.route.snapshot.paramMap.get('flightNumber') ?? '';
    if (!this.flightNumber) {
      this.error = 'Numero volo non specificato.';
      return;
    }

    this.loading = true;
    this.api.getFlightByNumber(this.flightNumber).subscribe({
      next: res => {
        this.flight = res.data && res.data.length ? res.data[0] : null;
        if (!this.flight) {
          this.error = `Nessun dettaglio trovato per il volo ${this.flightNumber}.`;
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Errore nel recupero dei dati.';
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

  goBack() {
    this.router.navigateByUrl('/');
  }
}
