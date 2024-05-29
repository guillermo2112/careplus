import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoCitaContodoComponent } from './registrado-cita-contodo.component';

describe('RegistradoCitaContodoComponent', () => {
  let component: RegistradoCitaContodoComponent;
  let fixture: ComponentFixture<RegistradoCitaContodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoCitaContodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoCitaContodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
