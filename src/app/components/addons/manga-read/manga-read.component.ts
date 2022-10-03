import { Component, OnInit } from '@angular/core';
import urlExist from "url-exist";
import {FakeArray} from "../../../../utils/fakeArray";

@Component({
  selector: 'app-manga-read',
  templateUrl: './manga-read.component.html',
  styleUrls: ['./manga-read.component.css']
})
export class MangaReadComponent implements OnInit {

  // 0 to 110 && 144 to 149
  createUrl1ed(chapter: number, page: number) {
    return `https://cdn.hxmanga.com/file/majekayoo/solo-leveling/Chapter-${chapter}/${page}.jpg`;
  }
  // 111 to 143
  createUrl2ed(chapter: number, page: number) {
    return `https://cdn.hxmanga.com/file/majekayoo/solo-leveling/Vol.2-Chapter-${chapter}/${page}.jpg`;
  }

  chapters: number[] = [];
  currChapter: number | null = null;
  pages: String[] = [];
  loading = false;

  constructor() { }

  async collectPages(chapter: number, page = 1) {
    let currUlr = '';
    this.backToTop();
    localStorage.setItem('last-manga', String(this.currChapter));
    this.loading = true;
    this.currChapter = chapter;

    while(this.currChapter == chapter) {
      if(chapter < 111 || chapter >= 144 && chapter <= 149)
        currUlr = this.createUrl1ed(chapter, page);
      if(chapter >= 111 && chapter < 144)
        currUlr = this.createUrl2ed(chapter, page);
      if(await urlExist(currUlr) && this.currChapter == chapter) {
        this.pages.push(currUlr);
        page++;
      }
      else {
        this.loading = false;
        break;
      }
    }
  }
  clear() {
    this.pages = [];
    this.currChapter = null;
    localStorage.removeItem('last-manga');
  }
  next() {
    this.pages = [];
    this.currChapter!++;
    this.collectPages(this.currChapter!).then();
  }
  previous() {
    this.pages = [];
    this.currChapter!--;
    this.collectPages(this.currChapter!).then();
  }
  backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.chapters = FakeArray.ofNumber(150);
    let lastManga = localStorage.getItem('last-manga');
    if(lastManga) {
      this.collectPages(parseInt(lastManga))
        .then(() =>
          console.log('Last session loaded.')
        );
    }
  }

}
