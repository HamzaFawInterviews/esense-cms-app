import { TestBed } from '@angular/core/testing';

import { EntityService } from './entity.service';

describe('DataService', () => {
  let service: EntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
