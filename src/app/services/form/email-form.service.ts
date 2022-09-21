import {Injectable} from '@angular/core';
import {IEmailForm} from "../../interfaces/IEmailForm";

@Injectable({
  providedIn: 'root'
})
export class EmailFormService {

  form: IEmailForm = {
    email: '',
    name: '',
    message: '',
  };

  constructor() { }

  clear() {
    this.form.email = '';
    this.form.name = '';
    this.form.message = '';
  }

}
