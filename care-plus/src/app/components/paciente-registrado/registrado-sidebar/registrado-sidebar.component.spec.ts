import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradoSidebarComponent } from './registrado-sidebar.component';

describe('RegistradoSidebarComponent', () => {
  let component: RegistradoSidebarComponent;
  let fixture: ComponentFixture<RegistradoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradoSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
