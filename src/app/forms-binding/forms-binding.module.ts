import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsBindingRoutingModule } from './forms-binding-routing.module';
import { FormsBindingComponent } from './forms-binding.component';


@NgModule({
  declarations: [
    FormsBindingComponent
  ],
  imports: [
    CommonModule,
    FormsBindingRoutingModule
  ]
})
export class FormsBindingModule { }
