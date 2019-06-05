import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanPopoverPage } from './boolean-popover.page';

describe('BooleanPopoverPage', () => {
  let component: BooleanPopoverPage;
  let fixture: ComponentFixture<BooleanPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
