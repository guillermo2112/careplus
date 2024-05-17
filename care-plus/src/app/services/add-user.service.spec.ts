import { TestBed } from '@angular/core/testing';

import { AddPacienteService } from './add-paciente.service';

describe('AddPacienteService', () => {
  let service: AddPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
