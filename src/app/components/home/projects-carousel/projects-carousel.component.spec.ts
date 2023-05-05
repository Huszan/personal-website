import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCarouselComponent } from './projects-carousel.component';

describe('ProjectsCarouselComponent', () => {
  let component: ProjectsCarouselComponent;
  let fixture: ComponentFixture<ProjectsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
