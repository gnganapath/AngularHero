import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingNavigationComponent } from './routing-navigation.component';

const routes: Routes = [
  {path:'', component: RoutingNavigationComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingNavigationRoutingModule { }
