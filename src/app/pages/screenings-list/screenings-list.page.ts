import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Icons } from 'src/app/components/icon/icons.enum';
import { AddEditScreeningModalPage } from './add-edit-screening-modal/add-edit-screening-modal.page';

@Component({
  selector: 'app-screenings-list',
  templateUrl: './screenings-list.page.html',
  styleUrls: ['./screenings-list.page.scss'],
})
export class ScreeningsListPage implements OnInit {

  Icons = Icons;
  text = 'Add Screening';

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  addScreening() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddEditScreeningModalPage,
      cssClass: 'width-700'
    });
    await modal.present();
  }

}
