import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { BMIPipe } from './bmi.pipe';

@NgModule({
  declarations: [BMIPipe],
  imports: [CommonModule],
  exports: [BMIPipe]
})
export class PipesModule {
}