import { TestBed } from '@angular/core/testing';

import { RpsServiceService } from './rps-service.service';

describe('RpsServiceService', () => {
  let service: RpsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
