import { Component, OnInit, Input } from '@angular/core';
import { Icons } from '../icon/icons.enum';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'relias-left-nav-item',
  templateUrl: './left-nav-item.component.html',
  styleUrls: ['./left-nav-item.component.scss'],
})
export class LeftNavItemComponent implements OnInit {

  @Input() item: any;
  @Input() level: number;
  nextLevel: number;
  Icons = Icons;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    if (this.level === undefined) {
      this.level = 0;
      this.item.expanded = true;
    }
    this.nextLevel = this.level + 1;
  }

  itemClicked() {
    if (this.level === 0) {
      return;
    } else if (this.item.children) {
      this.item.expanded = !this.item.expanded;
    } else {
      this.selectItem();
    }
  }

  async selectItem() {
    this.item.selected = true;
    if (this.item.href) {
      location.href = this.item.href;
    } else if (this.item.route) {
      this.navCtrl.navigateRoot(this.item.route, { animated: false });
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Nothing to do',
        message: this.item.title + ' hasn\'t been configured to go anywhere yet.',
        buttons: ['Okay']
      });
      await alert.present();
    }
  }
}
