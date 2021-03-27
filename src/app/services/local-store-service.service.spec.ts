import { TestBed } from '@angular/core/testing';

import { LocalStoreServiceService } from './local-store-service.service';

describe('LocalStoreServiceService', () => {
  let service: LocalStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
