import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftNavItemComponent } from './left-nav-item/left-nav-item.component';
import { IonicModule } from '@ionic/angular';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { IconComponent } from './icon/icon.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { BooleanTableFilterComponent } from './table-filter/boolean-table-filter/boolean-table-filter.component';
import { DateTableFilterComponent } from './table-filter/date-table-filter/date-table-filter.component';
import { MultiSelectTableFilterComponent } from './table-filter/multi-select-table-filter/multi-select-table-filter.component';
import { NumberTableFilterComponent } from './table-filter/number-table-filter/number-table-filter.component';
import { SingleSelectTableFilterComponent } from './table-filter/single-select-table-filter/single-select-table-filter.component';
import { StringTableFilterComponent } from './table-filter/string-table-filter/string-table-filter.component';

@NgModule({
  declarations: [
    LeftNavItemComponent,
    TopNavComponent,
    BackButtonComponent,
    IconComponent,
    FilterBarComponent,
    SearchbarComponent,
    DatepickerComponent,
    TableFilterComponent,
    BooleanTableFilterComponent,
    DateTableFilterComponent,
    MultiSelectTableFilterComponent,
    NumberTableFilterComponent,
    SingleSelectTableFilterComponent,
    StringTableFilterComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    LeftNavItemComponent,
    TopNavComponent,
    BackButtonComponent,
    IconComponent,
    FilterBarComponent,
    SearchbarComponent,
    DatepickerComponent,
    TableFilterComponent,
    BooleanTableFilterComponent,
    DateTableFilterComponent,
    MultiSelectTableFilterComponent,
    NumberTableFilterComponent,
    SingleSelectTableFilterComponent,
    StringTableFilterComponent
  ]
})
export class ComponentsModule { }
