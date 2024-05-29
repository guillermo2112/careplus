import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoCitaProfesionalesComponent } from './registrado-cita-profesionales.component';

describe('RegistradoCitaProfesionalesComponent', () => {
  let component: RegistradoCitaProfesionalesComponent;
  let fixture: ComponentFixture<RegistradoCitaProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoCitaProfesionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoCitaProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
