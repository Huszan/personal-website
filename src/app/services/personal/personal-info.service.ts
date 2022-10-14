import { Injectable } from '@angular/core';
import {TimeConvert} from "../../../utils/timeConversion";
import {ISkill} from "../../interfaces/ISkill";
import {IEducation} from "../../interfaces/IEducation";

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
      icon: 'http://www.lpe.pwsz.legnica.edu.pl/zalaczniki/uczelnie/pwsz/godlo_collegium.jpg',
      where: 'Legnica',
      degree: 'Engineer\'s',
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
      title: 'Angular',
      desc: 'Knowledge and skills in using Angular framework'
    },
    {
      title: 'Design patterns',
      desc: 'Understanding and ability to implement commonly used design patterns'
    },
    {
      title: 'Programming environments',
      desc: 'Familiar with vastly used environments like IntelliJ IDEA, Visual Studio, Visual Studio Code, WebStorm'
    },
    {
      title: 'Unit testing'
    },
    {
      title: 'SQL language'
    },
    {
      title: 'Git version control system'
    },
  ]

  constructor() { }

}
