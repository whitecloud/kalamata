import { Component, OnInit, Input } from '@angular/core';
import { Icons } from '../icon/icons.enum';

@Component({
  selector: 'relias-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent implements OnInit {
  @Input() length: number;

  Icons = Icons;

  constructor() { }

  ngOnInit() {}

}
