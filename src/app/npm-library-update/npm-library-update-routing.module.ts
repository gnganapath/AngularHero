import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpmLibraryUpdateComponent } from './npm-library-update.component';
import { ChartcomboComponent } from './chartcombo/chartcombo.component';

const routes: Routes = [
  {path:'', component: NpmLibraryUpdateComponent,
    children: [
      {path:'npmlibs', component: ChartcomboComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpmLibraryUpdateRoutingModule { }
