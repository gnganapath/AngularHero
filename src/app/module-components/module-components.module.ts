import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleComponentsRoutingModule } from './module-components-routing.module';
import { ModuleComponentsComponent } from './module-components.component';


@NgModule({
  declarations: [
    ModuleComponentsComponent
  ],
  imports: [
    CommonModule,
    ModuleComponentsRoutingModule
  ]
})
export class ModuleComponentsModule { }
