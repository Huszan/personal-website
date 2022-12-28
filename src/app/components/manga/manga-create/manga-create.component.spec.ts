import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaCreateComponent } from './manga-create.component';
import {FormsModule} from "@angular/forms";
import {MangaCreateService} from "./manga-create.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('MangaCreateComponent', () => {
  let component: MangaCreateComponent;
  let fixture: ComponentFixture<MangaCreateComponent>;

  beforeEach(async () => {
    const mangaCreateServiceSpy = jasmine.createSpyObj<MangaCreateService>(['loading','isApproved']);
    mangaCreateServiceSpy.loading.submit = false;
    mangaCreateServiceSpy.loading.test = false;
    mangaCreateServiceSpy.isApproved.and.returnValue(false);
    await TestBed.configureTestingModule({
      declarations: [ MangaCreateComponent ],
      imports: [FormsModule],
      providers: [{
        provide: MangaCreateService,
        useValue: mangaCreateServiceSpy
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
