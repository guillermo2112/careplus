import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistradoPedirCitaComponent } from './resgistrado-pedir-cita.component';

describe('ResgistradoPedirCitaComponent', () => {
  let component: ResgistradoPedirCitaComponent;
  let fixture: ComponentFixture<ResgistradoPedirCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistradoPedirCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResgistradoPedirCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
