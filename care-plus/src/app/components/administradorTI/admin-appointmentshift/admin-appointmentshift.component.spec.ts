import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentshiftComponent } from './admin-appointmentshift.component';

describe('AdminAppointmentshiftComponent', () => {
  let component: AdminAppointmentshiftComponent;
  let fixture: ComponentFixture<AdminAppointmentshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppointmentshiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAppointmentshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
