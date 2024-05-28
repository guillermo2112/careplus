import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoHomeComponent } from './registrado-home.component';

describe('RegistradoHomeComponent', () => {
  let component: RegistradoHomeComponent;
  let fixture: ComponentFixture<RegistradoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
