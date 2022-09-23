import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { InformationalBasicComponent } from './components/informational/informational-basic/informational-basic.component';
import { InformationalSkillsComponent } from './components/informational/informational-skills/informational-skills.component';
import { SkillComponent } from './components/informational/informational-skills/skill/skill.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClockComponent } from './components/addons/clock/clock.component';
import {HttpClientModule} from "@angular/common/http";
import { DarkmodeToggleComponent } from './components/addons/darkmode-toggle/darkmode-toggle.component';
import { LoadingCircleComponent } from './components/addons/loading-circle/loading-circle.component';

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
    DarkmodeToggleComponent,
    LoadingCircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
