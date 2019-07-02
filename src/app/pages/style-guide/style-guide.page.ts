import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';
import { RuiOptionModel } from 'relias-ui-lib';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.page.html',
  styleUrls: ['./style-guide.page.scss'],
})
export class StyleGuidePage implements OnInit {

  Icons = Icons;
  objectKeys = Object.keys;

  // multiselect
  values: RuiOptionModel[] = [
      { label: 'New York', value: { id: 1, name: 'New York' } },
      { label: 'SuperLongName that is very very very long and also it is a long name', value: { id: 16, name: 'Long Label' } },
      { label: 'Rome', value: { id: 2, name: 'Rome' } },
      { label: 'London', value: { id: 3, name: 'London' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul' } },
      { label: 'Los Angeles', value: { id: 5, name: 'Los Angeles' } },
      { label: 'Brussels', value: { id: 6, name: 'Brussels' } },
      { label: 'Venice', value: { id: 7, name: 'Venice' } },
      { label: 'Berlin', value: { id: 8, name: 'Berlin' } },
      { label: 'Madrid', value: { id: 9, name: 'Madrid' } },
      { label: 'Mexico City', value: { id: 10, name: 'Mexico City' } },
      { label: 'Toronto', value: { id: 11, name: 'Toronto' } },
      { label: 'St. Petersburg', value: { id: 12, name: 'St. Petersburg' } },
      { label: 'Beijing', value: { id: 13, name: 'Beijing' } },
      { label: 'Tokyo', value: { id: 14, name: 'Tokyo' } },
      { label: 'Bangladesh', value: { id: 15, name: 'Bangladesh' } }
    ];
  filterLabel = 'Choose Cities';
  searchPlaceholder = 'Search';

  // datepicker
  dateValue: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
