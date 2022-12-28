import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { MangaCreateService } from './manga-create.service';

describe('MangaCreateService', () => {
  let service: MangaCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MangaCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
