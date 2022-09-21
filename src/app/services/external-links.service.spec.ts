import { TestBed } from '@angular/core/testing';

import { ExternalLinksService } from './external-links.service';

describe('ExternalLinksService', () => {
  let service: ExternalLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
