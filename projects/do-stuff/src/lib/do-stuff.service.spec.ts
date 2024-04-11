import { TestBed } from '@angular/core/testing';

import { DoStuffService } from './do-stuff.service';

describe('DoStuffService', () => {
  let service: DoStuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoStuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
