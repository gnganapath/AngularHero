import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularDashboardComponent } from './angular-dashboard.component';

const routes: Routes = [ {path: '', component: AngularDashboardComponent} ]

@NgModule({
  declarations: [
    AngularDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AngularDashboardModule { }
