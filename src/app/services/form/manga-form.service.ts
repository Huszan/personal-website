import { Injectable } from '@angular/core';
import {IMangaForm} from "../../interfaces/IMangaForm";

@Injectable({
  providedIn: 'root'
})
export class MangaFormService {

  constructor() { }

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

  resolveCaptcha(response: string) {
    this.captcha = response;
  }
  isCaptchaValid() {
    return !!this.captcha;
  }

}
