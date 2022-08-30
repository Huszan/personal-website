import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalSkillsComponent } from './informational-skills.component';

describe('InformationalSkillsComponent', () => {
  let component: InformationalSkillsComponent;
  let fixture: ComponentFixture<InformationalSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationalSkillsComponent ]
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
