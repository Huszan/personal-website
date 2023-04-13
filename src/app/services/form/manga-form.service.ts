import {Injectable} from '@angular/core';
import {IMangaForm} from "../../interfaces/IMangaForm";

@Injectable({
  providedIn: 'root'
})
export class MangaFormService {

  private _emptyFormTemplate: IMangaForm = {
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
  private _filledFormTemplate: IMangaForm = {
    name: 'TestMangaDeleteMe',
    pic: 'https://thumbs.dreamstime.com/b/funny-image-mouth-fake-eyes-weird-looking-character-funny-image-mouth-fake-eyes-weird-looking-character-close-up-179483121.jpg',
    startingChapter: 0,
    chapterCount: 10,
    htmlLocate: {
      positions: '["p > a"]',
      lookedType: 'img',
      lookedAttr: 'src',
      urls: '["https://readallcomics.com/the-walking-dead-00!!!/", "https://readallcomics.com/the-walking-dead-0!!!/", "https://readallcomics.com/the-walking-dead-!!!/"]',
    }
  };

  form: IMangaForm = this._emptyFormTemplate;
  captcha: string = '';

  constructor() { }

}
