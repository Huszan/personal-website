import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PersonalInfoService} from "../../../../services/personal-info/personal-info.service";
import {prefabAnimations} from "../../../../directives/init-animation.directive";

@Component({
  selector: 'app-informational-basic',
  templateUrl: './informational-basic.component.html',
  styleUrls: ['./informational-basic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InformationalBasicComponent implements OnInit {

  constructor(
    public personalInfoService: PersonalInfoService,
  ) { }

  title = this.personalInfoService.title;
  education = this.personalInfoService.educations[0];

  animations = prefabAnimations;

  ngOnInit(): void {
  }

}
