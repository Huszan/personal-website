import { Component, OnInit } from '@angular/core';
import {FakeArray} from "../../../../utils/fakeArray";
import {HttpClient} from "@angular/common/http";

const SERVER_HTTP = 'https://pure-sea-86422.herokuapp.com/';
const DEV_SERVER_HTTP = 'http://localhost:3000/'
const GET_MANGA_LIST = 'getMangaList';
const GET_PAGES = 'getManga';

interface MangaForm {
  id: number,
  pic: string,
  name: string,
  startingChapter: number,
  chapterCount: number,
}

@Component({
  selector: 'app-manga-read',
  templateUrl: './manga-read.component.html',
  styleUrls: ['./manga-read.component.css']
})
export class MangaReadComponent implements OnInit {

  fakeArray = FakeArray;

  currHttp = SERVER_HTTP;
  mangas: MangaForm[] = [];
  currManga: MangaForm | null = null;
  chapters: number[] = [];
  currChapter: number | null = null;
  pages: String[] = [];
  isLoading = false;

  constructor(
    private http: HttpClient,
  ) {
  }

  loadLastSession() {
    let lastManga = localStorage.getItem('last-manga');
    let lastChapter = localStorage.getItem('last-chapter');
    if(lastManga && lastChapter && parseInt(lastManga) == this.currManga?.id!) {
      this.currManga = this.mangas[parseInt(lastManga)];
      this.collectPages(parseInt(lastManga), parseInt(lastChapter))
        .then(() =>
          console.log('Last session loaded.')
        );
    }
  }
  pickManga(id: number) {
    this.currManga = this.mangas[id];
    this.loadLastSession();
  }

  async getMangaList() {
    this.isLoading = true;
    await this.http.get(`${this.currHttp}${GET_MANGA_LIST}`).subscribe(
      res => {
        let p = res as MangaForm[];
        p.forEach(el => {
          this.mangas.push(el);
        })
        console.log(`Loaded ${this.mangas.length} mangas`);
        this.isLoading = false;
      }
    )
  }
  async collectPages(id: number, chapter: number) {
    console.log(this.mangas)
    this.isLoading = true;
    this.http.post(`${this.currHttp}${GET_PAGES}`, {id: id, chapter: chapter}).subscribe(
      res => {
        let p = res as [];
        if(p != undefined && p.length > 0) {
          console.log(`${p.length} pages collected successfully!`);
          this.currChapter = chapter;
          localStorage.setItem('last-manga', String(id));
          localStorage.setItem('last-chapter', String(chapter));
          this.pages = p;
          this.backToTop();
        }
        else {
          alert('Manga could not be loaded. Please try again later.');
        }
        this.isLoading = false;
      }, err => {
        console.log(err);
        alert('An error occurred during loading. Please try again later.')
        this.isLoading = false;
      })
  }

  changeManga() {
    this.pages = [];
    this.currChapter = null;
    this.currManga = null;
    this.backToTop();
  }
  clearChapter() {
    this.pages = [];
    this.currChapter = null;
    localStorage.removeItem('last-manga');
    this.backToTop();
  }
  nextChapter() {
    this.pages = [];
    this.currChapter!++;
    this.collectPages(this.currManga?.id!, this.currChapter!).then();
  }
  previousChapter() {
    this.pages = [];
    this.currChapter!--;
    this.collectPages(this.currManga?.id!, this.currChapter!).then();
  }
  backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.getMangaList().then();
  }

}
