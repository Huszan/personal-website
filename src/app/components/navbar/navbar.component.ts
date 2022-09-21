import { Component, OnInit } from '@angular/core';
import {ExternalLinksService} from "../../services/external-links.service";
import {routes} from "../../app-routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly availableRoutes = routes;

  constructor(
    public externalLinksService: ExternalLinksService
  ) { }

  ngOnInit(): void {
  }

}
