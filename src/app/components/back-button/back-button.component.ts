import { Component, OnInit } from '@angular/core';
import { Icons } from '../icon/icons.enum';

@Component({
  selector: 'relias-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  Icons = Icons;

  prevPage = {
    title: 'Member Details'
  };

  constructor() { }

  ngOnInit() {}

}
