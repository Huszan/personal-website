import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { MangaReadComponent } from './manga-read.component';
import {LoadingCircleComponent} from "../../addons/loading-circle/loading-circle.component";

describe('MangareadComponent', () => {
  let component: MangaReadComponent;
  let fixture: ComponentFixture<MangaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MangaReadComponent, LoadingCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
