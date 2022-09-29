import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {MangaReadComponent} from "./components/addons/manga-read/manga-read.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'contact', component: ContactComponent, title: 'Contact'},
  { path: 'manga-read', component: MangaReadComponent, title: 'Ignore'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
