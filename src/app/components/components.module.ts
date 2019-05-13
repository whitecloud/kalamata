import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavItemComponent } from './left-nav-item/left-nav-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LeftNavItemComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [LeftNavItemComponent]
})
export class ComponentsModule { }
