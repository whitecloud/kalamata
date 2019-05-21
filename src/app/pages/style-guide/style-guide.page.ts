import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.page.html',
  styleUrls: ['./style-guide.page.scss'],
})
export class StyleGuidePage implements OnInit {

  Icons = Icons;
  icons: any[];

  constructor() { }

  ngOnInit() {
    this.icons = Object.entries(Icons).map(array => {
      return {
        name: array[0],
        path: array[1]
      }
    })
  }

}
