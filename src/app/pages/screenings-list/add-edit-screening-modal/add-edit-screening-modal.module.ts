import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddEditScreeningModalPage } from './add-edit-screening-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditScreeningModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddEditScreeningModalPage]
})
export class AddEditScreeningModalPageModule {}
