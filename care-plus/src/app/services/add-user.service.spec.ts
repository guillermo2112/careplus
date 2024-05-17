import { TestBed } from '@angular/core/testing';

import { AddUserService } from './add-paciente.service';

describe('AddUserService', () => {
  let service: AddUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
