import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaCreateComponent } from './manga-create.component';

describe('MangaCreateComponent', () => {
  let component: MangaCreateComponent;
  let fixture: ComponentFixture<MangaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
