import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FakeArray} from "../../../../utils/fakeArray";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {API_ROUTE, ApiConnectionService} from "../../../services/api-connection.service";

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
  styleUrls: ['./manga-read.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MangaReadComponent implements OnInit {

  fakeArray = FakeArray;

  mangas = new Map<number, MangaForm>();
  currManga: MangaForm | undefined;
  chapters: number[] = [];
  currChapter: number | undefined;
  pages: string[] = [];
  isLoading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer,
    private apiConnection: ApiConnectionService,
  ) {}
  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  clearSession() {
    localStorage.setItem('last-manga', '');
    localStorage.setItem('last-chapter', '');
  }
  loadLastSession() {
    let lastManga = localStorage.getItem('last-manga');
    let lastChapter = localStorage.getItem('last-chapter');
    if(lastManga && lastChapter && parseInt(lastManga) == this.currManga?.id!) {
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

  getMangaList() {
    this.isLoading = true;
    let url = this.apiConnection.getRouteUrl(API_ROUTE.MANGA.GET_MANGAS);
    this.http.get(url).subscribe(
      async res => {
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
    let url = this.apiConnection.getRouteUrl(API_ROUTE.MANGA.GET_PAGES);
    this.http.post(url, {idHtmlLocate: manga.idHtmlLocate, chapter: chapter}).subscribe(
      res => {
        let p = res as [];
        if(p.length > 0) {
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
    this.getMangaList();
  }

}
