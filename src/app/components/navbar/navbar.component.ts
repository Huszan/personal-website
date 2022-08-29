import { Component, OnInit } from '@angular/core';
import {ExternalLinksService} from "../../services/external-links.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public externalLinksService: ExternalLinksService
  ) { }

  ngOnInit(): void {
  }

}
