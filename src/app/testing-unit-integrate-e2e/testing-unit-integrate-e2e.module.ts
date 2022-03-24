import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingUnitIntegrateE2eRoutingModule } from './testing-unit-integrate-e2e-routing.module';
import { TestingUnitIntegrateE2eComponent } from './testing-unit-integrate-e2e.component';


@NgModule({
  declarations: [
    TestingUnitIntegrateE2eComponent
  ],
  imports: [
    CommonModule,
    TestingUnitIntegrateE2eRoutingModule
  ]
})
export class TestingUnitIntegrateE2eModule { }
