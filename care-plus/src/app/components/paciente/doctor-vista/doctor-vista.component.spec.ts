import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorVistaComponent } from './doctor-vista.component';

describe('DoctorVistaComponent', () => {
  let component: DoctorVistaComponent;
  let fixture: ComponentFixture<DoctorVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
