import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectPopoverPage } from './multi-select-popover.page';

describe('MultiSelectPopoverPage', () => {
  let component: MultiSelectPopoverPage;
  let fixture: ComponentFixture<MultiSelectPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
