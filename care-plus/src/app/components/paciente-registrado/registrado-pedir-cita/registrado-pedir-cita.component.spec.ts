import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoPedirCitaComponent } from './registrado-pedir-cita.component';

describe('RegistradoPedirCitaComponent', () => {
  let component: RegistradoPedirCitaComponent;
  let fixture: ComponentFixture<RegistradoPedirCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoPedirCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoPedirCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
