import {Component, OnInit} from '@angular/core';
import {EmailFormService} from "../../services/form/email-form.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public emailForm: EmailFormService,
  ) { }

  onSubmit() {
    this.emailForm.clear();
  }
  ngOnInit(): void {
  }

}
