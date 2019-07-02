import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddEditScreeningModalPage } from './add-edit-screening-modal.page';
import { ReliasUIModule } from 'src/app/relias-ui.module';

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
    RouterModule.forChild(routes),
    ReliasUIModule
  ],
  declarations: [AddEditScreeningModalPage]
})
export class AddEditScreeningModalPageModule {}
