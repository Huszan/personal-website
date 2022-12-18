import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {MangaReadComponent} from "./components/manga/manga-read/manga-read.component";
import {MangaCreateComponent} from "./components/manga/manga-create/manga-create.component";
import {MangaComponent} from "./components/manga/manga.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'contact', component: ContactComponent, title: 'Contact'},
  { path: 'manga', redirectTo: '/manga/read', pathMatch: 'full'},
  { path: 'manga', component: MangaComponent, title: 'Manga',
    children: [
      { path: 'read', component: MangaReadComponent, title: 'Read manga' },
      { path: 'create', component: MangaCreateComponent, title: 'Create new manga' },
    ]},
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
