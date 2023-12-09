import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTransparentButtonComponent } from './custom-transparent-button.component';

describe('CustomIconButtonComponent', () => {
  let component: CustomTransparentButtonComponent;
  let fixture: ComponentFixture<CustomTransparentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomTransparentButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomTransparentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
