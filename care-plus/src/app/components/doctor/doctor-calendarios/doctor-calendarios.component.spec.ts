import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCalendariosComponent } from './doctor-calendarios.component';

describe('DoctorCalendariosComponent', () => {
  let component: DoctorCalendariosComponent;
  let fixture: ComponentFixture<DoctorCalendariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorCalendariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorCalendariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
