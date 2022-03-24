import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsBindingComponent } from './forms-binding.component';

const routes: Routes = [
  {path:'', component : FormsBindingComponent, 
  children: [

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsBindingRoutingModule { }
