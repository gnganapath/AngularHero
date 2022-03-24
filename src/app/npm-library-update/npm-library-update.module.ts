import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpmLibraryUpdateRoutingModule } from './npm-library-update-routing.module';
import { NpmLibraryUpdateComponent } from './npm-library-update.component';


@NgModule({
  declarations: [
    NpmLibraryUpdateComponent
  ],
  imports: [
    CommonModule,
    NpmLibraryUpdateRoutingModule
  ]
})
export class NpmLibraryUpdateModule { }
