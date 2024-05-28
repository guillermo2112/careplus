import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoProfileComponent } from './registrado-profile.component';

describe('RegistradoProfileComponent', () => {
  let component: RegistradoProfileComponent;
  let fixture: ComponentFixture<RegistradoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
