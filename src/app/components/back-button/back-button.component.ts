import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kalamata-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  prevPage = {
    title: 'Member Details'
  };

  constructor() { }

  ngOnInit() {}

}
