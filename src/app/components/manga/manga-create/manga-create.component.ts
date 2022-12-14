import { Component, OnInit } from '@angular/core';
import {MangaCreateService} from "../../../services/manga-create.service";
import {IMangaForm} from "../../../interfaces/IMangaForm";

@Component({
  selector: 'app-manga-create',
  templateUrl: './manga-create.component.html',
  styleUrls: ['./manga-create.component.css']
})
export class MangaCreateComponent implements OnInit {

  form: IMangaForm = {
    name: '',
    pic: '',
    startingChapter: 0,
    chapterCount: 1,
    htmlLocate: {
      positions: '',
      lookedType: 'img',
      lookedAttr: 'src',
      urls: '',
    }
  };
  captcha = '';

  constructor(
    public mangaCreateService: MangaCreateService,
  ) { }

  isLoading() {
    return this.mangaCreateService.loading.submit || this.mangaCreateService.loading.test;
  }
  onSubmitTest() {
    this.mangaCreateService.testManga(this.form);
  }
  onSubmitCreate() {
    this.mangaCreateService.sendApprovedManga();
  }
  resolved(response: string) {
    this.captcha = response;
  }

  ngOnInit(): void {
  }

}
