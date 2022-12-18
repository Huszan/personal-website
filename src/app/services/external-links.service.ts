import { Injectable } from '@angular/core';
import {IExternalLink} from "../interfaces/IExternalLink";

@Injectable({
  providedIn: 'root'
})
export class ExternalLinksService {

  private git: IExternalLink = {
    title: 'GitHub',
    url: 'https://github.com/Huszan',
    icon: 'assets/logos/brand-github.svg'
  };
  private fb: IExternalLink = {
    title: 'Facebook',
    url: 'https://www.facebook.com/mateuszjacenty1',
    icon: 'assets/logos/brand-facebook.svg'
  };
  private linked: IExternalLink = {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mateusz-jacenty-895917186/',
    icon: 'assets/logos/brand-linkedin.svg'
  };

  public getLinks() {
    return [
      this.git,
      this.fb,
      this.linked
    ]
  }

  constructor() {
  }

}
