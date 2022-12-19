import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemeToggleComponent } from './color-theme-toggle.component';

describe('DarkmodeToggleComponent', () => {
  let component: ColorThemeToggleComponent;
  let fixture: ComponentFixture<ColorThemeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorThemeToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
