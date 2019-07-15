import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';
import { ModalController, AlertController } from '@ionic/angular';
import { MetabolicScreening } from 'src/app/models/metabolic-screening.model';
import { Attribute } from 'src/app/models/attribute.model';

@Component({
  selector: 'relias-add-edit-screening-modal',
  templateUrl: './add-edit-screening-modal.page.html',
  styleUrls: ['./add-edit-screening-modal.page.scss'],
})
export class AddEditScreeningModalPage implements OnInit {

  Icons = Icons;
  
  table: HTMLElement;
  tableAtBottom: boolean = false;

  screening: MetabolicScreening;
  today: Date = new Date();

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.screening = new MetabolicScreening();

    // hide the see more floating button when the table has scrolled all of the way
    setTimeout(() => {
      this.table = document.getElementById('edit-screening');
      this.table.onscroll = () => {
        this.tableAtBottom = this.table.scrollTop >= this.table.clientHeight;
      }
    });
  }

  defaultDateSelected($event) {
    console.log($event);
  }

  dateSelected($event, attribute: Attribute) {
    attribute.date = $event;
  }

  showMore() {
    this.table.scroll({
      top: this.table.scrollTop + this.table.clientHeight - 45,
      behavior: 'smooth'
    });
  }

  toggleOptOut(attr: Attribute) {
    attr.optOut = !attr.optOut;
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
