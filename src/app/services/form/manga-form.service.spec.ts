import { TestBed } from '@angular/core/testing';

import { MangaFormService } from './manga-form.service';

describe('MangaFormService', () => {
  let service: MangaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
