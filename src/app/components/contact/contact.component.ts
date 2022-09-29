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
  private readonly postURL = 'https://pure-sea-86422.herokuapp.com/post';

  constructor(
    public emailForm: EmailFormService,
    private http: HttpClient,
  ) { }

  onSubmit() {
    this.sendEmail();
    this.emailForm.clear();
  }
  private sendEmail() {
    this.isLoading = true;
    this.http.post(this.postURL, this.emailForm.form).subscribe(
      res => {
        alert("Email sent successfully!");
        this.isLoading = false;
        document.forms.namedItem("form")!.reset();
    },
      err => {
        alert(err.message);
        this.isLoading = false;
      })
  }
  ngOnInit(): void {
  }

}