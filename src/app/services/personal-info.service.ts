import { Injectable } from '@angular/core';
import {TimeConvert} from "../../utils/timeConversion";
import {ISkill} from "../interfaces/ISkill";
import {IEducation} from "../interfaces/IEducation";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  private readonly birthDate = Date.UTC(1997, 7, 6);

  readonly forename = 'Mateusz';
  readonly surname = 'Jacenty';
  readonly fullName = `${this.forename} ${this.surname}`;
  readonly title = 'Front-End Developer';
  readonly age = TimeConvert.msToYear(Date.now() - this.birthDate);

  readonly educations: IEducation[] = [
    {
      universityName: 'Collegium Witelona Uczelnia Państwowa',
      icon: "assets/pictures/college.png",
      where: 'Legnica',
      degree: 'Engineer\'s',
      in: 'web/software programming',
      from: new Date(2018, 8),
      to: new Date(2022, 5),
    }
  ]
  readonly languageSkills: ISkill[] = [
    {
      title: 'Polish',
      level: 6
    },
    {
      title: 'English',
      level: 5
    },
  ]
  readonly devSkills: ISkill[] = [
    {
      title: 'html5',
      ico: 'assets/pictures/skills/html.png'
    },
    {
      title: 'css3',
      ico: 'assets/pictures/skills/css.png'
    },
    {
      title: 'javascript',
      ico: 'assets/pictures/skills/js.png'
    },
    {
      title: 'typescript',
      ico: 'assets/pictures/skills/ts.png'
    },
    {
      title: 'sass',
      ico: 'assets/pictures/skills/sass.png'
    },
    {
      title: 'tailwind',
      ico: 'assets/pictures/skills/tailwind.png'
    },
    {
      title: 'angular',
      ico: 'assets/pictures/skills/angular.png'
    },
    {
      title: 'material',
      ico: 'assets/pictures/skills/material.svg'
    },
    {
      title: 'primeng',
      ico: 'assets/pictures/skills/primeng.svg'
    },
    {
      title: 'mysql',
      ico: 'assets/pictures/skills/sqlite.png'
    },
    {
      title: 'git',
      ico: 'assets/pictures/skills/git.png'
    },
  ]

  constructor() { }

}
