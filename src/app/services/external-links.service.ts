import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinksService {

  readonly personalGit = 'https://github.com/Huszan';
  readonly personalFb = 'https://www.facebook.com/mateuszjacenty1';
  readonly personalLinked = 'https://www.linkedin.com/in/mateusz-jacenty-895917186/';

  constructor() { }
}
