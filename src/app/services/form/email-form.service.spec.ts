import { TestBed } from '@angular/core/testing';

import { EmailFormService } from './email-form.service';

describe('EmailFormService', () => {
  let service: EmailFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
