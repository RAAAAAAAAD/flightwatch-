import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportFlights } from './airport-flights';

describe('AirportFlights', () => {
  let component: AirportFlights;
  let fixture: ComponentFixture<AirportFlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportFlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportFlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
