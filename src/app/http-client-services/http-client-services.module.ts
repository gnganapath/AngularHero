import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientServicesRoutingModule } from './http-client-services-routing.module';
import { HttpClientServicesComponent } from './http-client-services.component';

import { RxjsHttpComponent } from './rxjs-http/rxjs-http.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpServiceService } from './http-service.service';

@NgModule({
  declarations: [
    HttpClientServicesComponent,    
    RxjsHttpComponent,
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    HttpClientServicesRoutingModule
  ],
  providers:[HttpServiceService]
})
export class HttpClientServicesModule { }
