import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MangaCreateService} from "../../../services/manga-create.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MangaCreateService,
  ]
})
export class MangaCreateModule { }
