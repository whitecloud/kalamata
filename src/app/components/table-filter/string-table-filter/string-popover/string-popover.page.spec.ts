import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPopoverPage } from './string-popover.page';

describe('StringPopoverPage', () => {
  let component: StringPopoverPage;
  let fixture: ComponentFixture<StringPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
