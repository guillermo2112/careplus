import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistradoCitaEspecialidadComponent } from './resgistrado-cita-especialidad.component';

describe('ResgistradoCitaEspecialidadComponent', () => {
  let component: ResgistradoCitaEspecialidadComponent;
  let fixture: ComponentFixture<ResgistradoCitaEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistradoCitaEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResgistradoCitaEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
