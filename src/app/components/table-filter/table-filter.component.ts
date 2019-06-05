import { Component, OnInit, Input, ComponentRef } from '@angular/core';
import { Icons } from '../icon/icons.enum';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'relias-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent implements OnInit {

  @Input() component: any;
  @Input() props: any;

  Icons = Icons;
  filtered: boolean = false;

  constructor(
    private popoverCtrl: PopoverController
  ) {
  }

  ngOnInit() {
  }

  async showFilterPopover($event) {
    const popover = await this.popoverCtrl.create({
      component: this.component,
      componentProps: this.props,
      event: $event,
      mode: 'ios'
    });
    await popover.present();
  }

}
