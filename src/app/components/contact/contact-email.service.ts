import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmailForm} from "../../interfaces/IEmailForm";

const postURL = 'https://personal-website-backend-production.up.railway.app/post';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  sendEmail(emailForm: IEmailForm) {
    return this.http.post(postURL, emailForm);
  }

  constructor(
    private http: HttpClient,
  ) { }
}
