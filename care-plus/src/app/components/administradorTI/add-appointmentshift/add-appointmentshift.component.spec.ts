import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentshiftComponent } from './add-appointmentshift.component';

describe('AddAppointmentshiftComponent', () => {
  let component: AddAppointmentshiftComponent;
  let fixture: ComponentFixture<AddAppointmentshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAppointmentshiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppointmentshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
