import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistradoCitaProfesionalesComponent } from './resgistrado-cita-profesionales.component';

describe('ResgistradoCitaProfesionalesComponent', () => {
  let component: ResgistradoCitaProfesionalesComponent;
  let fixture: ComponentFixture<ResgistradoCitaProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistradoCitaProfesionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResgistradoCitaProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
