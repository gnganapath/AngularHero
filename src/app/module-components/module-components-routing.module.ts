import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponentsComponent } from './module-components.component';

const routes: Routes = [
  {path:'', component: ModuleComponentsComponent, 
  children: [

    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleComponentsRoutingModule { }
