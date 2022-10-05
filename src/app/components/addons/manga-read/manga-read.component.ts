import { Component, OnInit } from '@angular/core';
import urlExist from "url-exist";
import {FakeArray} from "../../../../utils/fakeArray";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-manga-read',
  templateUrl: './manga-read.component.html',
  styleUrls: ['./manga-read.component.css']
})
export class MangaReadComponent implements OnInit {

  private readonly getPagesURL = 'https://pure-sea-86422.herokuapp.com/getSoloLeveling';
  chapters: number[] = [];
  currChapter: number | null = null;
  pages: String[] = [];
  isLoading = false;

  constructor(
    private http: HttpClient,
  ) { }

  async collectPages(chapter: number) {
    this.isLoading = true;
    this.http.post(this.getPagesURL, {chapter: chapter}).subscribe(
      res => {
        console.log("Pages collected successfully!");
        this.currChapter = chapter;
        localStorage.setItem('last-manga', String(chapter));
        this.isLoading = false;
        this.pages = res as [];
      }, err => {
        console.log(err);
        this.isLoading = false;
      })
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
    this.chapters = FakeArray.ofNumber(180);
    let lastManga = localStorage.getItem('last-manga');
    if(lastManga) {
      this.collectPages(parseInt(lastManga))
        .then(() =>
          console.log('Last session loaded.')
        );
    }
  }

}
