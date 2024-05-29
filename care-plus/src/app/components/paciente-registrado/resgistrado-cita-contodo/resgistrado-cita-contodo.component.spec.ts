import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistradoCitaContodoComponent } from './resgistrado-cita-contodo.component';

describe('ResgistradoCitaContodoComponent', () => {
  let component: ResgistradoCitaContodoComponent;
  let fixture: ComponentFixture<ResgistradoCitaContodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistradoCitaContodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResgistradoCitaContodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
