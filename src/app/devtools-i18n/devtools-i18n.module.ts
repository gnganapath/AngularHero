import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevtoolsI18nRoutingModule } from './devtools-i18n-routing.module';
import { DevtoolsI18nComponent } from './devtools-i18n.component';


@NgModule({
  declarations: [
    DevtoolsI18nComponent
  ],
  imports: [
    CommonModule,
    DevtoolsI18nRoutingModule
  ]
})
export class DevtoolsI18nModule { }
