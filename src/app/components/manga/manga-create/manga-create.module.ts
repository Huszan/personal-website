import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MangaCreateService} from "../../../services/manga-create.service";
import {MangaFormService} from "../../../services/form/manga-form.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MangaCreateService,
    MangaFormService,
  ]
})
export class MangaCreateModule { }
