import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleSelectPopoverPage } from './single-select-popover.page';

const routes: Routes = [
  {
    path: '',
    component: SingleSelectPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleSelectPopoverPage]
})
export class SingleSelectPopoverPageModule {}
