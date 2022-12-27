import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMangaForm} from "../interfaces/IMangaForm";
import {Router} from "@angular/router";
import {API_ROUTE, ApiConnectionService} from "./api-connection.service";

@Injectable({
  providedIn: 'root'
})
export class MangaCreateService {

  loading = {
    test: false,
    submit: false,
  }
  private lastApproved: IMangaForm | undefined;

  isApproved = () => {
    return this.lastApproved != undefined;
  }
  isLoading() {
    return this.loading.submit || this.loading.test;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiConnection: ApiConnectionService,
  ) { }

  parseForm(form: IMangaForm) {
    let formClone = JSON.parse(JSON.stringify(form));
    formClone.htmlLocate.positions = JSON.parse(formClone.htmlLocate.positions);
    formClone.htmlLocate.urls = JSON.parse(formClone.htmlLocate.urls);
    return formClone;
  }
  testManga(form: IMangaForm) {
    if(this.isLoading()) throw new Error("Service is currently working. Please wait.");
    this.loading.test = true;
    let formClone = this.parseForm(form);
    let url = this.apiConnection.getRouteUrl(API_ROUTE.MANGA.TEST_FORM);
    this.http.post(url, formClone)
      .subscribe(res => {
        this.loading.test = false;
        if(res === true) {
          alert(`Successfully received pages for all chapters. ` +
            `You can now click Submit button to upload it!`);
          this.lastApproved = formClone;
        }
        else alert(`Unable to get all of manga chapters. Failed on -> ${res}`);
      },
      err => {
        alert(err.message);
        this.loading.test = false;
      })
  }
  sendApprovedManga() {
    if(this.isLoading()) throw new Error("Service is currently working. Please wait.");
    if(!this.lastApproved) throw new Error("There is no approved manga.");
    this.loading.submit = true;
    let url = this.apiConnection.getRouteUrl(API_ROUTE.MANGA.SEND_NEW);
    this.http.post(url, this.lastApproved)
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
