import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'relias-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
