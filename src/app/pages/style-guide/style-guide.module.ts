import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StyleGuidePage } from './style-guide.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReliasUIModule } from 'src/app/relias-ui.module';

const routes: Routes = [
  {
    path: '',
    component: StyleGuidePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReliasUIModule
  ],
  declarations: [StyleGuidePage]
})
export class StyleGuidePageModule {}
