import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoNavbarComponent } from './registrado-navbar.component';

describe('RegistradoNavbarComponent', () => {
  let component: RegistradoNavbarComponent;
  let fixture: ComponentFixture<RegistradoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
