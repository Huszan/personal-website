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
      title: 'Writing clean code',
      desc: 'Ability to write clean code using programming languages like Java, JavaScript, TypeScript, C# and Kotlin'
    },
    {
      title: 'Frameworks',
      desc: 'Knowledge and skills in using Angular and React frameworks'
    },
    {
      title: 'Design patterns',
      desc: 'Understanding and ability to implement commonly used design patterns'
    },
    {
      title: 'Unit testing'
    },
    {
      title: 'SQL'
    },
    {
      title: 'Git version control system'
    },
  ]

  constructor() { }

}
