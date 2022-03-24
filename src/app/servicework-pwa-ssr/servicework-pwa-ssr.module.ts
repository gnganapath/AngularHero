import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceworkPwaSsrRoutingModule } from './servicework-pwa-ssr-routing.module';
import { ServiceworkPwaSsrComponent } from './servicework-pwa-ssr.component';


@NgModule({
  declarations: [
    ServiceworkPwaSsrComponent
  ],
  imports: [
    CommonModule,
    ServiceworkPwaSsrRoutingModule
  ]
})
export class ServiceworkPwaSsrModule { }
