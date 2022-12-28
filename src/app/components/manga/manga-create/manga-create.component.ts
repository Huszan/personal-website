import { Component, OnInit } from '@angular/core';
import {MangaCreateService} from "./manga-create.service";
import {IMangaForm} from "../../../interfaces/IMangaForm";
import {MangaFormService} from "../../../services/form/manga-form.service";

@Component({
  selector: 'app-manga-create',
  templateUrl: './manga-create.component.html',
  styleUrls: ['./manga-create.component.css']
})
export class MangaCreateComponent implements OnInit {

  form: IMangaForm;
  captcha: string;

  constructor(
    public mangaCreateService: MangaCreateService,
    private mangaFormService: MangaFormService,
  ) {
    this.form = mangaFormService.form;
    this.captcha = mangaFormService.captcha;
  }

  isLoading() {
    return this.mangaCreateService.loading.submit || this.mangaCreateService.loading.test;
  }

  onSubmitTest() {
    this.mangaCreateService.testManga(this.form);
  }

  onSubmitCreate() {
    this.mangaCreateService.sendApprovedManga();
  }

  resolveCaptcha(response: string) {
    this.captcha = response;
  }

  ngOnInit(): void {
  }

}
