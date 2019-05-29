import { Component, OnInit } from '@angular/core';
import { Icons } from '../icon/icons.enum';

@Component({
  selector: 'relias-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  // a boolean to represent if a date has been selected by the user or not
  selected: boolean;
  // a string to show in the input box
  modelString: string;
  // a string to show as a footer in the date picker
  footerString: string;

  DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  Icons = Icons;

  constructor() { }

  ngOnInit() {
    const today = new Date();
    this.dateSelected({
      month: today.getMonth() + 1,
      day: today.getDate(),
      year: today.getFullYear()
    }, false);
  }

  dateSelected(date, selected: boolean = true) {
    this.selected = selected;

    // set the string for the model in the input box
    this.modelString = [date.month, date.day, date.year].join('/');
    
    // set the footer string into the format:
    // Saturday, February 23, 2019
    // Note: date.month starts at 1 for January, 2 for February, etc
    // the Date class expects 0 for January, 1 for February, etc
    const dateMonth = date.month - 1;
    const newDate = new Date(date.year, dateMonth, date.day);
    this.footerString = this.DAYS[newDate.getDay()] + ', ' + this.MONTHS[dateMonth] + ' ' + date.day + ', ' + date.year;
  }
}
