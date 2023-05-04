import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmailFormService} from "../../services/form/email-form.service";
import {ContactEmailService} from "./contact-email.service";
import {StateManagementService} from "../../services/state-management.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('centerScreenWrapper') contactFormRef!: ElementRef;
  parentHeight = 729;
  captcha: string = '';

  constructor(
    public emailForm: EmailFormService,
    private contactEmail: ContactEmailService,
    private state: StateManagementService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.parentHeight = this.contactFormRef.nativeElement.parentElement.parentElement.offsetHeight;
  }

  onSubmit() {
    this.sendEmail();
  }

  resolveCaptcha(response: string) {
    this.captcha = response;
  }

  private sendEmail() {
    this.state.startLoading();
    this.contactEmail.sendEmail(this.emailForm.form)
      .subscribe({
        next: () => {
          alert('Email sent successfully');
          this.clearForm();
        },
        error: (err) => {alert(err.message)},
        complete: () => {this.state.stopLoading()},
      })
  }

  clearForm() {
    document.forms.namedItem("form")!.reset();
    this.emailForm.clear();
  }

  isLoading() {
    return this.state.isLoading();
  }

}
