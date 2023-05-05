import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

export const API_DOMAIN = {
  Production: 'https://personal-website-backend-production.up.railway.app/',
  Development: 'http://localhost:3000/'
}
export const API_ROUTE = {
  EMAIL: {
    SEND: 'post',
  },
}

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  private readonly domain;

  getDomain() {
    return this.domain;
  }
  getRouteUrl(route: string) {
    return this.domain + route;
  }

  constructor() {
    if(environment.production) { this.domain = API_DOMAIN.Production; }
    else { this.domain = API_DOMAIN.Development; }
  }
}
