import { TestBed } from '@angular/core/testing';

import { MiosService } from './mios.service';

describe('MiosService', () => {
  let service: MiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
