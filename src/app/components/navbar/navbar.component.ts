import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ExternalLinksService} from "../../services/external-links.service";
import {routes} from "../../app-routing.module";
import {Router} from "@angular/router";
import {IExternalLink} from "../../interfaces/IExternalLink";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  readonly availableRoutes = routes;
  readonly externalLinks: IExternalLink[];

  private getMainPathFromUrl(url: string) {
    return url.split('/', 2)[1];
  }
  isRoutePathActive(routePath: string) {
    let currentPath = this.getMainPathFromUrl(this.router.url);
    return currentPath === routePath;
  }

  constructor(
    private externalLinksService: ExternalLinksService,
    private router: Router,
  ) {
    this.externalLinks = this.externalLinksService.getLinks();
  }

  ngOnInit(): void {
  }

}
