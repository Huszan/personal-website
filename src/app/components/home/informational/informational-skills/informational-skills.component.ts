import { Component, OnInit } from '@angular/core';
import {PersonalInfoService} from "../../../../services/personal-info.service";

@Component({
  selector: 'app-informational-skills',
  templateUrl: './informational-skills.component.html',
  styleUrls: ['./informational-skills.component.css']
})
export class InformationalSkillsComponent implements OnInit {

  constructor(
    private personalInfoService: PersonalInfoService
  ) { }

  getLanguageSkills() {
    return this.personalInfoService.languageSkills;
  }
  getDevSkills() {
    return this.personalInfoService.devSkills;
  }

  ngOnInit(): void {
  }

}
