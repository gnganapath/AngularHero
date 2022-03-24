import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityOwaspProdbuildComponent } from './security-owasp-prodbuild.component';

const routes: Routes = [
  {path:'', component: SecurityOwaspProdbuildComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityOwaspProdbuildRoutingModule { }
