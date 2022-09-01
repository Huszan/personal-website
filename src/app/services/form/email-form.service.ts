import {Injectable} from '@angular/core';
import {IEmailForm} from "../../interfaces/IEmailForm";

@Injectable({
  providedIn: 'root'
})
export class EmailFormService {

  form: IEmailForm = {
    email: '',
    message: '',
  };

  constructor() { }

  clear() {
    this.form.email = '';
    this.form.message = '';
  }

}
