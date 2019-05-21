import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavItemComponent } from './left-nav-item/left-nav-item.component';
import { IonicModule } from '@ionic/angular';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { IconComponent } from './icon/icon.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    LeftNavItemComponent,
    TopNavComponent,
    BackButtonComponent,
    IconComponent,
    FilterBarComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    LeftNavItemComponent,
    TopNavComponent,
    BackButtonComponent,
    IconComponent,
    FilterBarComponent
  ]
})
export class ComponentsModule { }
