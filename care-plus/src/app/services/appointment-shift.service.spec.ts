import { TestBed } from '@angular/core/testing';

import { AppointmentShiftService } from './appointment-shift.service';

describe('AppointmentShiftService', () => {
  let service: AppointmentShiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentShiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
