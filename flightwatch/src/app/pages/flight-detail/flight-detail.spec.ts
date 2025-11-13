import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailComponent } from './flight-detail';

describe('FlightDetail', () => {
  let component: FlightDetailComponent;
  let fixture: ComponentFixture<FlightDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
