import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavItemComponent } from './left-nav-item/left-nav-item.component';
import { IonicModule } from '@ionic/angular';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [
    LeftNavItemComponent,
    TopNavComponent,
    BackButtonComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    LeftNavItemComponent,
    TopNavComponent,
    BackButtonComponent
  ]
})
export class ComponentsModule { }
