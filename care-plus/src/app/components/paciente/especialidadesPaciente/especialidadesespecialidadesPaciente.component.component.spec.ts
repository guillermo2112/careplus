import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialidadesPacienteComponents } from './especialidadesPaciente.component';


describe('EspecialidadesPacienteComponents', () => {
  let component: EspecialidadesPacienteComponents;
  let fixture: ComponentFixture<EspecialidadesPacienteComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialidadesPacienteComponents]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecialidadesPacienteComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
