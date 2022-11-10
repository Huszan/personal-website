import { TestBed } from '@angular/core/testing';

import { MangaCreateService } from './manga-create.service';

describe('MangaCreateService', () => {
  let service: MangaCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
