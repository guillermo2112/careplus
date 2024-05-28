import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListaPacientesComponent } from './doctor-lista-pacientes.component';

describe('DoctorListaPacientesComponent', () => {
  let component: DoctorListaPacientesComponent;
  let fixture: ComponentFixture<DoctorListaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorListaPacientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorListaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
