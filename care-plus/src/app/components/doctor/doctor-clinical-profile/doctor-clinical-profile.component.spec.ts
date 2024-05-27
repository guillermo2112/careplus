import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorClinicalProfileComponent } from './doctor-clinical-profile.component';

describe('DoctorClinicalProfileComponent', () => {
  let component: DoctorClinicalProfileComponent;
  let fixture: ComponentFixture<DoctorClinicalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorClinicalProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorClinicalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
