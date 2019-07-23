import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Icons } from 'src/app/components/icon/icons.enum';
import { AddEditScreeningModalPage } from './add-edit-screening-modal/add-edit-screening-modal.page';
import { ScreeningsService } from 'src/app/services/screenings.service';
import { MetabolicScreening } from 'src/app/models/metabolic-screening.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-screenings-list',
  templateUrl: './screenings-list.page.html',
  styleUrls: ['./screenings-list.page.scss'],
})
export class ScreeningsListPage implements OnInit {

  Icons = Icons;
  text = 'Add Screening';
  $screenings: Observable<MetabolicScreening[]>;

  constructor(
    private modalCtrl: ModalController,
    private screeningsService: ScreeningsService
  ) { }

  ngOnInit() {
    this.$screenings = this.screeningsService.getScreenings();
  }

  addScreening() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddEditScreeningModalPage,
      cssClass: 'mbs-modal'
    });
    await modal.present();
  }

}
