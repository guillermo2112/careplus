import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoCitaEspecialidadComponent } from './registrado-cita-especialidad.component';

describe('RegistradoCitaEspecialidadComponent', () => {
  let component: RegistradoCitaEspecialidadComponent;
  let fixture: ComponentFixture<RegistradoCitaEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoCitaEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoCitaEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
