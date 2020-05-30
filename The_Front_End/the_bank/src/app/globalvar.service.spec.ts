import { TestBed } from '@angular/core/testing';

import { GlobalvarService } from './globalvar.service';

describe('GlobalvarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalvarService = TestBed.get(GlobalvarService);
    expect(service).toBeTruthy();
  });
});
