import { Injectable } from '@angular/core';
import {IExternalLink} from "../interfaces/IExternalLink";

@Injectable({
  providedIn: 'root'
})
export class ExternalLinksService {

  private git: IExternalLink = {
    title: 'GitHub',
    url: 'https://github.com/Huszan',
    icon: 'assets/logos/GitHub-Mark-Light-32px.png'
  };
  private fb: IExternalLink = {
    title: 'Facebook',
    url: 'https://www.facebook.com/mateuszjacenty1',
    icon: 'assets/logos/icons8-facebook-48.png'
  };
  private linked: IExternalLink = {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mateusz-jacenty-895917186/',
    icon: 'assets/logos/icons8-linkedin-48.png'
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
