import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {

  topNav: any = {
    navColor: '#325352',
    logo: 'https://azstorage.reliaslearning.com/authsa/logos/1714/636862659668508705.png'
  };

  constructor() { }

  ngOnInit() {}

}
