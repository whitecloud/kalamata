import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectPopoverPage } from './single-select-popover.page';

describe('SingleSelectPopoverPage', () => {
  let component: SingleSelectPopoverPage;
  let fixture: ComponentFixture<SingleSelectPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
