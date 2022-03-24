import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularIntroComponent } from './angular-intro.component';
import { AngularFeatureComponent } from './angular-feature/angular-feature.component';
import { AngularDevsetupComponent } from './angular-devsetup/angular-devsetup.component';
import { AngularCliComponent } from './angular-cli/angular-cli.component';
import { TypescriptWebpackComponent } from './typescript-webpack/typescript-webpack.component';

const routes: Routes = [
  {path: '', component: AngularIntroComponent,
   children: [
     //{path:'', redirectTo:'feature', pathMatch: 'full'},
     {path: 'feature', component: AngularFeatureComponent},
     {path: 'devsetup', component: AngularDevsetupComponent},
     {path: 'angular-cli', component: AngularCliComponent},
     {path: 'typescript-webpack', component: TypescriptWebpackComponent }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularIntroRoutingModule { }
