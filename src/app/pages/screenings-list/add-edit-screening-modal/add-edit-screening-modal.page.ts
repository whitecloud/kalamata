import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'relias-add-edit-screening-modal',
  templateUrl: './add-edit-screening-modal.page.html',
  styleUrls: ['./add-edit-screening-modal.page.scss'],
})
export class AddEditScreeningModalPage implements OnInit {

  Icons = Icons;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    const alert = await this.alertCtrl.create({
      header: 'Discard Changes',
      message: 'Are you sure you want to discard all changes? This cannot be undone.',
      mode: 'md',
      buttons: [
        { 
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Discard',
          handler: () => {
            this.modalCtrl.dismiss();
          }
        }
      ]
    })
    alert.present();
  }
}
