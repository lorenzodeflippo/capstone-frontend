import { TestBed } from '@angular/core/testing';

import { WrestlerService } from './wrestler.service';

describe('WrestlerService', () => {
  let service: WrestlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrestlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
