import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormService } from "../../services/form/email-form.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EmailFormService,
  ],
})
export class ContactModule { }
