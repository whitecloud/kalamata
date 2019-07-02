import { NgModule } from '@angular/core';
import { RuiButtonModule, RuiMultiselectModule, RuiDatepickerModule } from 'relias-ui-lib';

@NgModule({
  imports: [
    RuiButtonModule,
    RuiMultiselectModule,
    RuiDatepickerModule
  ],
  exports: [
    RuiButtonModule,
    RuiMultiselectModule,
    RuiDatepickerModule
  ]
})
export class ReliasUIModule {}
