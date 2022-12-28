import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalSkillsComponent } from './informational-skills.component';
import {SkillComponent} from "./skill/skill.component";

describe('InformationalSkillsComponent', () => {
  let component: InformationalSkillsComponent;
  let fixture: ComponentFixture<InformationalSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationalSkillsComponent, SkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
