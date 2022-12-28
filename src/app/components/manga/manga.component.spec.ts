import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaComponent } from './manga.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('MangaComponent', () => {
  let component: MangaComponent;
  let fixture: ComponentFixture<MangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
