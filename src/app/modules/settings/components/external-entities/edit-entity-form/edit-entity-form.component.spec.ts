import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntityFormComponent } from './edit-entity-form.component';

describe('EditEntityFormComponent', () => {
  let component: EditEntityFormComponent;
  let fixture: ComponentFixture<EditEntityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEntityFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEntityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
