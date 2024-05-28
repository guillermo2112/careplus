import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorPacienteComponent } from './doctorPaciente.component';

describe('DoctorPacienteComponent', () => {
  let component: DoctorPacienteComponent;
  let fixture: ComponentFixture<DoctorPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
