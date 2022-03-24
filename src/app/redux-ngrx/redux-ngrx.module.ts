import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxNgrxRoutingModule } from './redux-ngrx-routing.module';
import { ReduxNgrxComponent } from './redux-ngrx.component';


@NgModule({
  declarations: [
    ReduxNgrxComponent
  ],
  imports: [
    CommonModule,
    ReduxNgrxRoutingModule
  ]
})
export class ReduxNgrxModule { }
