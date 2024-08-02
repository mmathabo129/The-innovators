import { TestBed } from '@angular/core/testing';

import { FlaggedClaimsService } from './flagged-claims.service';

describe('FlaggedClaimsService', () => {
  let service: FlaggedClaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaggedClaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
