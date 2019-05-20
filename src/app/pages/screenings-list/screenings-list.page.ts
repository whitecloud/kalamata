import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Icons } from 'src/app/components/icon/icons.enum';

@Component({
  selector: 'app-screenings-list',
  templateUrl: './screenings-list.page.html',
  styleUrls: ['./screenings-list.page.scss'],
})
export class ScreeningsListPage implements OnInit {

  Icons = Icons;
  text = 'Add Screening';

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  openModal() {
  }

}
