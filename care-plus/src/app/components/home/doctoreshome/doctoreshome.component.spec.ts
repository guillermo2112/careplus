import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoreshomeComponent } from './doctoreshome.component';

describe('DoctoreshomeComponent', () => {
  let component: DoctoreshomeComponent;
  let fixture: ComponentFixture<DoctoreshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctoreshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctoreshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
