import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceworkPwaSsrComponent } from './servicework-pwa-ssr.component';

const routes: Routes = [
  {path:'', component: ServiceworkPwaSsrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceworkPwaSsrRoutingModule { }
