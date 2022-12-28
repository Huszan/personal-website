import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import {PersonalInfoService} from "../../../../services/personal-info.service";



@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PersonalInfoService
  ],
  exports: [
    EducationComponent
  ]
})
export class InformationalEducationModule { }
