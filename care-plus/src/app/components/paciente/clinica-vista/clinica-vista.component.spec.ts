import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaVistaComponent } from './clinica-vista.component';

describe('ClinicaVistaComponent', () => {
  let component: ClinicaVistaComponent;
  let fixture: ComponentFixture<ClinicaVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicaVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
