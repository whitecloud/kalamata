import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.page.html',
  styleUrls: ['./style-guide.page.scss'],
})
export class StyleGuidePage implements OnInit {

  Icons = Icons;

  constructor() { }

  ngOnInit() {
  }

}
