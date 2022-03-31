import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormsBindingRoutingModule } from './forms-binding-routing.module';
import { FormsBindingComponent } from './forms-binding.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { BindingEventAttributeComponent } from './binding-event-attribute/binding-event-attribute.component';


@NgModule({
  declarations: [
    FormsBindingComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    BindingEventAttributeComponent
  ],
  imports: [
    CommonModule,
    FormsBindingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsBindingModule { }
