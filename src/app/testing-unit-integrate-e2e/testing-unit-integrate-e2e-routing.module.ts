import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingUnitIntegrateE2eComponent } from './testing-unit-integrate-e2e.component';

const routes: Routes = [
  { path: '', component: TestingUnitIntegrateE2eComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingUnitIntegrateE2eRoutingModule { }
