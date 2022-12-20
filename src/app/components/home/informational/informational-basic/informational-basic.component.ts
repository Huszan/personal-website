import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PersonalInfoService} from "../../../../services/personal/personal-info.service";

@Component({
  selector: 'app-informational-basic',
  templateUrl: './informational-basic.component.html',
  styleUrls: ['./informational-basic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InformationalBasicComponent implements OnInit {

  constructor(
    private personalInfoService: PersonalInfoService,
  ) { }

  fullName = this.personalInfoService.fullName;
  title = this.personalInfoService.title;
  education = this.personalInfoService.educations[0];

  ngOnInit(): void {
  }

}
