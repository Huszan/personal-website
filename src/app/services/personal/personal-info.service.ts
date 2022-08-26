import { Injectable } from '@angular/core';
import {Convert} from "../../../utils/conversion";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  private readonly birthDate = Date.UTC(1997, 7, 6);

  readonly forename = 'Mateusz';
  readonly surname = 'Jacenty';
  readonly fullName = `${this.forename} ${this.surname}`;
  readonly title = 'Front-End Developer';
  readonly age = Convert.msToYr(Date.now() - this.birthDate);

  constructor() { }
}
