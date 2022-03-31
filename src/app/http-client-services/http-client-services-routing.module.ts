import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientServicesComponent } from './http-client-services.component';
import { RxjsHttpComponent } from './rxjs-http/rxjs-http.component';
import { HttpClientComponent } from './http-client/http-client.component';


const routes: Routes = [
  {path:'', component: HttpClientServicesComponent,
    children: [
      {path:'http-client-api', component: HttpClientComponent},
      {path:'rxjs-http', component: RxjsHttpComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpClientServicesRoutingModule { }
