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
  optOut: boolean[] = new Array(9).fill(false);
  
  table: HTMLElement;
  tableAtBottom: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.table = document.getElementById('edit-screening');

    // hide the see more floating button when the table has scrolled all of the way
    // TODO: make it so you can click through the button after the smooth fadeout
    this.table.onscroll = () => {
      this.tableAtBottom = this.table.scrollTop >= this.table.clientHeight;
    }
  }

  showMore() {
    this.table.scroll({
      top: this.table.scrollTop + this.table.clientHeight - 45,
      behavior: 'smooth'
    });
  }

  toggleOptOut(i: number) {
    this.optOut[i] = !this.optOut[i];
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
