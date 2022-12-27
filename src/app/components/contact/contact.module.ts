import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormService } from "../../services/form/email-form.service";
import {ContactEmailService} from "./contact-email.service";
import {StateManagementService} from "../../services/state-management.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EmailFormService,
    ContactEmailService,
    StateManagementService,
  ],
})
export class ContactModule { }
