import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlHeaderComponent } from './search-control-header.component';

describe('SearchControlHeaderComponent', () => {
  let component: SearchControlHeaderComponent;
  let fixture: ComponentFixture<SearchControlHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchControlHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchControlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
