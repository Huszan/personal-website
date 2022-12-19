import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorThemeService} from "../../../services/color-theme.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ColorThemeService,
  ],
})
export class ColorThemeToggleModule { }
