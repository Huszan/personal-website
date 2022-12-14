import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalBasicComponent } from './informational-basic.component';

describe('InformationalBasicComponent', () => {
  let component: InformationalBasicComponent;
  let fixture: ComponentFixture<InformationalBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationalBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
