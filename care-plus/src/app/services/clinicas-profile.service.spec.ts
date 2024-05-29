import { TestBed } from '@angular/core/testing';

import { ClinicasProfileService } from './clinicas-profile.service';

describe('ClinicasProfileService', () => {
  let service: ClinicasProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicasProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
