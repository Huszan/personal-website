import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MangaCreateService} from "./manga-create.service";
import {MangaFormService} from "../../../services/form/manga-form.service";
import {ApiConnectionService} from "../../../services/api-connection.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MangaCreateService,
    MangaFormService,
    ApiConnectionService,
  ]
})
export class MangaCreateModule { }
