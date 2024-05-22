import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardespecialidadesComponent } from './cardespecialidades.component';

describe('CardespecialidadesComponent', () => {
  let component: CardespecialidadesComponent;
  let fixture: ComponentFixture<CardespecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardespecialidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardespecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
