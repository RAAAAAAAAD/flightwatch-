import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportFlightsComponent } from './airport-flights';

describe('AirportFlights', () => {
  let component: AirportFlightsComponent;
  let fixture: ComponentFixture<AirportFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportFlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
