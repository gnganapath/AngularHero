import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientServicesRoutingModule } from './http-client-services-routing.module';
import { HttpClientServicesComponent } from './http-client-services.component';

@NgModule({
  declarations: [
    HttpClientServicesComponent
  ],
  imports: [
    CommonModule,
    HttpClientServicesRoutingModule
  ]
})
export class HttpClientServicesModule { }
