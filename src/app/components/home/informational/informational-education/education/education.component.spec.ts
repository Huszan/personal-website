import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {IEducation} from "../../../../../interfaces/IEducation";

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponentWrapper,
        EducationComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  @Component({
    selector  : 'test-cmp',
    template  : '<app-education [education]="exampleEducation"></app-education>',
  })
  class TestComponentWrapper {
    exampleEducation: IEducation = {
      universityName: 'University name',
      icon: 'assets/pictures/college.png',
      where: 'somewhere',
      degree: 'master',
      in: 'Tokyo',
      from: new Date('01012010'),
      to: new Date('01012013'),
    }
  }
});

