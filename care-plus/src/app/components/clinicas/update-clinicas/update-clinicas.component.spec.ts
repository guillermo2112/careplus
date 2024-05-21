import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialtyComponent } from './update-clinicas.component';

describe('UpdateSpecialtyComponent', () => {
  let component: UpdateSpecialtyComponent;
  let fixture: ComponentFixture<UpdateSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSpecialtyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
