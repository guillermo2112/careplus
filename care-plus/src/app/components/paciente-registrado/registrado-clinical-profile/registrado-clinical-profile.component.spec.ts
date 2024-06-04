import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoClinicalProfileComponent } from './registrado-clinical-profile.component';

describe('RegistradoClinicalProfileComponent', () => {
  let component: RegistradoClinicalProfileComponent;
  let fixture: ComponentFixture<RegistradoClinicalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoClinicalProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoClinicalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
