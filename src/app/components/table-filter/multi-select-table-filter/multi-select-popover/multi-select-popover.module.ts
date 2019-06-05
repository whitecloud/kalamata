import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultiSelectPopoverPage } from './multi-select-popover.page';

const routes: Routes = [
  {
    path: '',
    component: MultiSelectPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MultiSelectPopoverPage]
})
export class MultiSelectPopoverPageModule {}
