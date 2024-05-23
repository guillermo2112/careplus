import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicasAdminComponent } from './clinicas-admin.component';

describe('ClinicasAdminComponent', () => {
  let component: ClinicasAdminComponent;
  let fixture: ComponentFixture<ClinicasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicasAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
