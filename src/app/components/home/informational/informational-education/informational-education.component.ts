import { Component, OnInit } from '@angular/core';
import {PersonalInfoService} from "../../../../services/personal-info/personal-info.service";
import {prefabAnimations} from "../../../../directives/init-animation.directive";

@Component({
  selector: 'app-informational-education',
  templateUrl: './informational-education.component.html',
  styleUrls: ['./informational-education.component.css']
})
export class InformationalEducationComponent implements OnInit {

  constructor(
    private personalInfoService: PersonalInfoService,
  ) { }

  educations = this.personalInfoService.educations;
  animations = prefabAnimations;

  ngOnInit(): void {
  }

}
