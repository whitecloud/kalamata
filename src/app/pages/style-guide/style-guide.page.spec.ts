import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGuidePage } from './style-guide.page';

describe('StyleGuidePage', () => {
  let component: StyleGuidePage;
  let fixture: ComponentFixture<StyleGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGuidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
