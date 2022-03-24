import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpmLibraryUpdateComponent } from './npm-library-update.component';

const routes: Routes = [
  {path:'', component: NpmLibraryUpdateComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpmLibraryUpdateRoutingModule { }
