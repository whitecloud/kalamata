import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'left-nav-item',
  templateUrl: './left-nav-item.component.html',
  styleUrls: ['./left-nav-item.component.scss'],
})
export class LeftNavItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {}

  itemClicked() {
    if (this.item.children) {
      this.item.expanded = !this.item.expanded;
    }
  }

  childClicked(child) {
    console.log(child);
  }
}
