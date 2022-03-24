import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityOwaspProdbuildRoutingModule } from './security-owasp-prodbuild-routing.module';
import { SecurityOwaspProdbuildComponent } from './security-owasp-prodbuild.component';


@NgModule({
  declarations: [
    SecurityOwaspProdbuildComponent
  ],
  imports: [
    CommonModule,
    SecurityOwaspProdbuildRoutingModule
  ]
})
export class SecurityOwaspProdbuildModule { }
