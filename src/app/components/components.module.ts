import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavItemComponent } from './left-nav-item/left-nav-item.component';
import { IonicModule } from '@ionic/angular';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    LeftNavItemComponent,
    TopNavComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    LeftNavItemComponent,
    TopNavComponent
  ]
})
export class ComponentsModule { }
