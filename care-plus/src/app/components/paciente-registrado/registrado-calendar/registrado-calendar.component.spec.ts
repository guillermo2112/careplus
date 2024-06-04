import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoCalendarComponent } from './registrado-calendar.component';

describe('RegistradoCalendarComponent', () => {
  let component: RegistradoCalendarComponent;
  let fixture: ComponentFixture<RegistradoCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
