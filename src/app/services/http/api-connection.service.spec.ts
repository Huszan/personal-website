import { TestBed } from '@angular/core/testing';

import {API_DOMAIN, ApiConnectionService} from './api-connection.service';
import {environment} from "../../../environments/environment";

describe('ApiConnectionService', () => {
  let service: ApiConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assign correct domain url', () => {
    if(environment.production)
      expect(service.getDomain() == API_DOMAIN.Production).toBeTruthy();
    else
      expect(service.getDomain() == API_DOMAIN.Development).toBeTruthy();
  })

});
