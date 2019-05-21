import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'relias-add-edit-screening-modal',
  templateUrl: './add-edit-screening-modal.page.html',
  styleUrls: ['./add-edit-screening-modal.page.scss'],
})
export class AddEditScreeningModalPage implements OnInit {

  Icons = Icons;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
