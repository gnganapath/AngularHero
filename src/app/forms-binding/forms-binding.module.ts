import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormsBindingRoutingModule } from './forms-binding-routing.module';
import { FormsBindingComponent } from './forms-binding.component';


@NgModule({
  declarations: [
    FormsBindingComponent
  ],
  imports: [
    CommonModule,
    FormsBindingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsBindingModule { }
