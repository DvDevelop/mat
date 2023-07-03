import { TestBed } from '@angular/core/testing';

import { DatacrudService } from './datacrud.service';

describe('DatacrudService', () => {
  let service: DatacrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
