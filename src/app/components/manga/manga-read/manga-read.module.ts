import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiConnectionService} from "../../../services/api-connection.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiConnectionService,
  ],
})
export class MangaReadModule { }
