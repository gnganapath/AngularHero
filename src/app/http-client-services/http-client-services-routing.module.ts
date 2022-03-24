import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientServicesComponent } from './http-client-services.component';

const routes: Routes = [
  {path:'', component: HttpClientServicesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpClientServicesRoutingModule { }
