import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoCitasComponent } from './registrado-citas.component';

describe('RegistradoCitasComponent', () => {
  let component: RegistradoCitasComponent;
  let fixture: ComponentFixture<RegistradoCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
