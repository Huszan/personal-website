import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ContactEmailService } from './contact-email.service';

describe('ContactMailService', () => {
  let service: ContactEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
