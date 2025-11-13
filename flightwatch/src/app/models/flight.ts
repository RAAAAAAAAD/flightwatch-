export interface FlightResponse {
  data: Flight[];
}

export interface Flight {
  airline: {
    name: string | null;
    iata: string | null;
  };
  flight: {
    iata: string | null;
  };
  departure: {
    airport: string | null;
    iata: string | null;
    terminal: string | null;
    gate: string | null;
    scheduled: string | null;
    actual: string | null;
    delay: number | null;
  };
  arrival: {
    airport: string | null;
    iata: string | null;
    terminal: string | null;
    gate: string | null;
    scheduled: string | null;
    actual: string | null;
  };
  flight_status: string | null;
}
