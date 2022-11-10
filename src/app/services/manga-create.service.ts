import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMangaForm} from "../interfaces/IMangaForm";
import {Router} from "@angular/router";

const SERVER_HTTP = {
  Development: 'http://localhost:3000/',
  Main: 'https://pure-sea-86422.herokuapp.com/',
}
const PATH = {
  test: 'testMangaForm',
  send: 'createManga',
}

@Injectable({
  providedIn: 'root'
})
export class MangaCreateService {

  loading = {
    test: false,
    submit: false,
  }
  currHttp = SERVER_HTTP.Main;
  private lastApproved: IMangaForm | undefined;
  private readonly testURL = `${this.currHttp}${PATH.test}`;
  private readonly sendURL = `${this.currHttp}${PATH.send}`;

  isApproved = () => {
    return this.lastApproved != undefined;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  parseForm(form: IMangaForm) {
    let formClone = JSON.parse(JSON.stringify(form));
    formClone.htmlLocate.positions = JSON.parse(formClone.htmlLocate.positions);
    formClone.htmlLocate.urls = JSON.parse(formClone.htmlLocate.urls);
    return formClone;
  }
  testManga(form: IMangaForm) {
    this.loading.test = true;
    let formClone = this.parseForm(form);
    this.http.post(this.testURL, formClone)
      .subscribe(res => {
        this.lastApproved = formClone;
        this.loading.test = false;
        if(res === true) alert(`Successfully received pages for all chapters. ` +
          `You can now click Submit button to upload it!`);
        else alert(`Unable to get all of manga chapters. Failed on -> ${res}`);
      },
      err => {
        alert(err.message);
        this.loading.test = false;
      })
  }
  sendApprovedManga() {
    this.loading.submit = true;
    if(!this.lastApproved) return;
    this.http.post(this.sendURL, this.lastApproved)
      .subscribe(res => {
        if(res) {
          alert(`Successfully added manga to collection! ` +
            `Thank You for input :)`);
          this.loading.submit = false;
          this.router.navigate(['manga-read']);
        }
        else {
          alert(`Something went wrong. Please try again.`);
          this.loading.submit = false;
        }
      },
        error => {
          alert(error.message);
          this.loading.submit = false;
        })
  }

}
