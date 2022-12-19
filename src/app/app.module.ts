import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { InformationalBasicComponent } from './components/home/informational/informational-basic/informational-basic.component';
import { InformationalSkillsComponent } from './components/home/informational/informational-skills/informational-skills.component';
import { SkillComponent } from './components/home/informational/informational-skills/skill/skill.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClockComponent } from './components/addons/clock/clock.component';
import {HttpClientModule} from "@angular/common/http";
import { ColorThemeToggleComponent } from './components/addons/color-theme-toggle/color-theme-toggle.component';
import { LoadingCircleComponent } from './components/addons/loading-circle/loading-circle.component';
import { MangaReadComponent } from './components/manga/manga-read/manga-read.component';
import {RecaptchaModule} from "ng-recaptcha";
import { ArrowComponent } from './components/addons/buttons/arrow/arrow.component';
import { HouseComponent } from './components/addons/buttons/house/house.component';
import { InformationalEducationComponent } from './components/home/informational/informational-education/informational-education.component';
import {
  InformationalEducationModule
} from "./components/home/informational/informational-education/informational-education.module";
import { MangaCreateComponent } from './components/manga/manga-create/manga-create.component';
import { MangaComponent } from './components/manga/manga.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    InformationalBasicComponent,
    InformationalSkillsComponent,
    SkillComponent,
    FooterComponent,
    ClockComponent,
    ColorThemeToggleComponent,
    LoadingCircleComponent,
    MangaReadComponent,
    ArrowComponent,
    HouseComponent,
    InformationalEducationComponent,
    MangaCreateComponent,
    MangaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    InformationalEducationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
