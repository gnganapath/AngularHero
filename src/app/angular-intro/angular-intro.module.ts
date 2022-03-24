import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIntroRoutingModule } from './angular-intro-routing.module';
import { AngularIntroComponent } from './angular-intro.component';
import { AngularFeatureComponent } from './angular-feature/angular-feature.component';
import { AngularDevsetupComponent } from './angular-devsetup/angular-devsetup.component';
import { AngularCliComponent } from './angular-cli/angular-cli.component';
import { TypescriptWebpackComponent } from './typescript-webpack/typescript-webpack.component';


@NgModule({
  declarations: [
    AngularIntroComponent,
    AngularFeatureComponent,
    AngularDevsetupComponent,
    AngularCliComponent,
    TypescriptWebpackComponent
  ],
  imports: [
    CommonModule,
    AngularIntroRoutingModule
  ]
})
export class AngularIntroModule { }
