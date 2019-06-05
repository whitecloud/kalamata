import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePopoverPage } from './date-popover.page';

describe('DatePopoverPage', () => {
  let component: DatePopoverPage;
  let fixture: ComponentFixture<DatePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
