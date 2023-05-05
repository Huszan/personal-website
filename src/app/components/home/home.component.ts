import { Component } from '@angular/core';
import {prefabAnimations} from "../../directives/init-animation.directive";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  animations = prefabAnimations;

  constructor() { }

}
