import { Component, OnInit } from '@angular/core';
import {FakeArray} from "../../../utils/fakeArray";
import {HttpClient} from "@angular/common/http";

const SERVER_HTTP = {
  Development: 'http://localhost:3000/',
  Main: 'https://pure-sea-86422.herokuapp.com/',
}
const GET_MANGA_LIST = 'getMangaList';
const GET_PAGES = 'getMangaPages';

interface MangaForm {
  id: number,
  pic: string,
  name: string,
  startingChapter: number,
  chapterCount: number,
  idHtmlLocate: number,
}

@Component({
  selector: 'app-manga-read',
  templateUrl: './manga-read.component.html',
  styleUrls: ['./manga-read.component.css']
})
export class MangaReadComponent implements OnInit {

  fakeArray = FakeArray;

  currHttp = SERVER_HTTP.Main;
  mangas = new Map<number, MangaForm>();
  currManga: MangaForm | undefined;
  chapters: number[] = [];
  currChapter: number | undefined;
  pages: String[] = [];
  isLoading = false;

  constructor(
    private http: HttpClient,
  ) {}
  clearSession() {
    localStorage.setItem('last-manga', '');
    localStorage.setItem('last-chapter', '');
  }
  loadLastSession() {
    let lastManga = localStorage.getItem('last-manga');
    let lastChapter = localStorage.getItem('last-chapter');
    if(lastManga && lastChapter) {
      let loadedManga = this.mangas.get(parseInt(lastManga));
      if(loadedManga) {
        this.currManga = this.mangas.get(parseInt(lastManga));
        this.collectPages(this.currManga!, parseInt(lastChapter))
          .then(() =>
            console.log('Last session loaded.')
          );
      }
      else {
        console.log(`Last session couldn't be loaded. Deleting local storage.`);
        this.clearSession();
      }
    }
  }
  pickManga(manga: MangaForm) {
    this.currManga = manga;
    this.loadLastSession();
  }

  async getMangaList() {
    this.isLoading = true;
    await this.http.get(`${this.currHttp}${GET_MANGA_LIST}`).subscribe(
      res => {
        let p = res as MangaForm[];
        p.forEach(el => {
          this.mangas.set(el.id, el);
        })
        console.log(`Loaded ${this.mangas.size} mangas`);
        this.isLoading = false;
      }
    )
  }
  async collectPages(manga: MangaForm, chapter: number) {
    this.backToTop();
    this.isLoading = true;
    this.http.post(`${this.currHttp}${GET_PAGES}`, {idHtmlLocate: manga.idHtmlLocate, chapter: chapter}).subscribe(
      res => {
        let p = res as [];
        if(p != undefined && p.length > 0) {
          console.log(`${p.length} pages collected successfully!`);
          this.currChapter = chapter;
          localStorage.setItem('last-manga', String(manga.id));
          localStorage.setItem('last-chapter', String(chapter));
          this.pages = p;
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
    this.currChapter = undefined;
    this.currManga = undefined;
    this.backToTop();
  }
  clearChapter() {
    this.pages = [];
    this.currChapter = undefined;
    localStorage.removeItem('last-manga');
    this.backToTop();
  }
  nextChapter() {
    this.pages = [];
    this.currChapter!++;
    this.collectPages(this.currManga!, this.currChapter!).then();
  }
  previousChapter() {
    this.pages = [];
    this.currChapter!--;
    this.collectPages(this.currManga!, this.currChapter!).then();
  }
  backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.getMangaList().then(
    );
  }

}
