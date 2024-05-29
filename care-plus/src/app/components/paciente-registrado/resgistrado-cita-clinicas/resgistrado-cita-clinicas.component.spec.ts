import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistradoCitaClinicasComponent } from './resgistrado-cita-clinicas.component';

describe('ResgistradoCitaClinicasComponent', () => {
  let component: ResgistradoCitaClinicasComponent;
  let fixture: ComponentFixture<ResgistradoCitaClinicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistradoCitaClinicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResgistradoCitaClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
