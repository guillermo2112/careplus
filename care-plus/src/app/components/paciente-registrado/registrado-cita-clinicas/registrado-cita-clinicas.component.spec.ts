import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoCitaClinicasComponent } from './registrado-cita-clinicas.component';

describe('RegistradoCitaClinicasComponent', () => {
  let component: RegistradoCitaClinicasComponent;
  let fixture: ComponentFixture<RegistradoCitaClinicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoCitaClinicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoCitaClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
