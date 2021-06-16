import { TestBed } from '@angular/core/testing';

import { DevService } from './dev.service';

describe('DevService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevService = TestBed.inject(DevService);
    expect(service).toBeTruthy();
  });
});
