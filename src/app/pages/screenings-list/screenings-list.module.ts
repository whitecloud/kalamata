import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScreeningsListPage } from './screenings-list.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddEditScreeningModalPage } from './add-edit-screening-modal/add-edit-screening-modal.page';
import { ReliasUIModule } from 'src/app/relias-ui.module';

const routes: Routes = [
  {
    path: '',
    component: ScreeningsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    ReliasUIModule
  ],
  declarations: [
    ScreeningsListPage,
    AddEditScreeningModalPage
  ],
  entryComponents: [
    AddEditScreeningModalPage
  ]
})
export class ScreeningsListPageModule {}
