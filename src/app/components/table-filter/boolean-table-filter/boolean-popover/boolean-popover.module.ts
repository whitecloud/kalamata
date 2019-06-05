import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BooleanPopoverPage } from './boolean-popover.page';

const routes: Routes = [
  {
    path: '',
    component: BooleanPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooleanPopoverPage]
})
export class BooleanPopoverPageModule {}
