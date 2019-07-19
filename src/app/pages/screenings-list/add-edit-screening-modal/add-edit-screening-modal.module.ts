import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditScreeningModalPage } from './add-edit-screening-modal.page';
import { ReliasUIModule } from 'src/app/relias-ui.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReliasUIModule,
    PipesModule,
    ComponentsModule,
  ],
  declarations: [
    AddEditScreeningModalPage,
  ],
  exports: [
    AddEditScreeningModalPage,
  ],
  entryComponents: [
    AddEditScreeningModalPage,
  ]
})
export class AddEditScreeningModalPageModule {}
