import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxNgrxComponent } from './redux-ngrx.component';

const routes: Routes = [
  {path:'', component: ReduxNgrxComponent ,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxNgrxRoutingModule { }
