import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmailForm} from "../../interfaces/IEmailForm";
import {API_ROUTE, ApiConnectionService} from "../../services/api-connection.service";

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  sendEmail(emailForm: IEmailForm) {
    let url = this.apiConnection.getRouteUrl(API_ROUTE.EMAIL.SEND);
    return this.http.post(url, emailForm);
  }

  constructor(
    private http: HttpClient,
    private apiConnection: ApiConnectionService,
  ) { }
}
