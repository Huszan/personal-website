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
import {FormsModule} from "@angular/forms";
import { ClockComponent } from './components/addons/clock/clock.component';
import {HttpClientModule} from "@angular/common/http";
import { ColorThemeToggleComponent } from './components/addons/color-theme-toggle/color-theme-toggle.component';
import { LoadingCircleComponent } from './components/addons/loading-circle/loading-circle.component';
import {RecaptchaModule} from "ng-recaptcha";
import { InformationalEducationComponent } from './components/home/informational/informational-education/informational-education.component';
import { InitAnimationDirective } from './directives/init-animation.directive';
import {
  EducationComponent
} from "./components/home/informational/informational-education/education/education.component";
import { CarouselComponent } from './components/addons/carousel/carousel.component';
import { ProjectsCarouselComponent } from './components/home/projects-carousel/projects-carousel.component';
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
    InformationalEducationComponent,
    InitAnimationDirective,
    EducationComponent,
    CarouselComponent,
    ProjectsCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
