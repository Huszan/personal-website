import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaReadComponent } from './manga-read.component';

describe('MangareadComponent', () => {
  let component: MangaReadComponent;
  let fixture: ComponentFixture<MangaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaReadComponent ]
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
