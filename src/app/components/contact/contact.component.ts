import {Component} from '@angular/core';
import {EmailFormService} from "../../services/form/email-form.service";
import {ContactEmailService} from "../../services/http/contact-email.service";
import {StateManagementService} from "../../services/state-management/state-management.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  captcha: string = '';

  constructor(
    public emailForm: EmailFormService,
    private contactEmail: ContactEmailService,
    private state: StateManagementService,
  ) { }


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
