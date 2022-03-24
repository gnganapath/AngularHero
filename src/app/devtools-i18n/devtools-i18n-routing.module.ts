import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevtoolsI18nComponent } from './devtools-i18n.component';

const routes: Routes = [
  {path:'', component: DevtoolsI18nComponent,
  children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevtoolsI18nRoutingModule { }
