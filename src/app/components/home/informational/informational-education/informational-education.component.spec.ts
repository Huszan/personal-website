import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalEducationComponent } from './informational-education.component';
import {EducationComponent} from "./education/education.component";

describe('InformationalEducationComponent', () => {
  let component: InformationalEducationComponent;
  let fixture: ComponentFixture<InformationalEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationalEducationComponent, EducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
