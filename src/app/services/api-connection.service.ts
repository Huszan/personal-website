import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

const API_DOMAIN = {
  Production: 'https://personal-website-backend-production.up.railway.app/',
  Development: 'http://localhost:3000/'
}
export const API_ROUTE = {
  EMAIL: {
    SEND: 'post',
  },
  MANGA: {
    GET_PAGES: 'getMangaPages',
    TEST_FORM: 'testMangaForm',
    SEND_NEW: 'createManga',
    GET_MANGAS: 'getMangaList',
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  private readonly domain;

  getRouteUrl(route: string) {
    return this.domain + route;
  }

  constructor() {
    if(environment.production) {
      console.log(`Connected to PRODUCTION API`);
      this.domain = API_DOMAIN.Production;
    }
    else {
      console.log(`Connected to DEVELOPMENT API`);
      this.domain = API_DOMAIN.Development;
    }
  }
}
