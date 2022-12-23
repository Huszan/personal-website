import {Component, OnInit} from '@angular/core';
import {EmailFormService} from "../../services/form/email-form.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLoading = false;
  captcha: string;
  private readonly postURL = 'https://personal-website-backend-production.up.railway.app/post';

  constructor(
    public emailForm: EmailFormService,
    private http: HttpClient,
  ) {
    this.captcha = '';
  }

  onSubmit() {
    this.sendEmail();
  }
  resolved(response: string) {
    this.captcha = response;
  }
  private sendEmail() {
    this.isLoading = true;
    this.http.post(this.postURL, this.emailForm.form)
      .subscribe(res => {
        this.isLoading = false;
        this.clearForm();
        alert("Email sent successfully!");
    },
      err => {
        alert("Something went wrong during sending email. Try again later.\n\n" + err.message);
        this.isLoading = false;
      })
  }
  clearForm() {
    document.forms.namedItem("form")!.reset();
    this.emailForm.clear();
  }

  ngOnInit(): void {
  }

}
