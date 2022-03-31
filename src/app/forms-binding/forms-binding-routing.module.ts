import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsBindingComponent } from './forms-binding.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { BindingEventAttributeComponent } from './binding-event-attribute/binding-event-attribute.component';


const routes: Routes = [
  {path:'', component : FormsBindingComponent, 
  children: [
    {path:'reactive-form', component:ReactiveFormsComponent },
    {path:'template-form', component: TemplateFormsComponent },
    {path:'binding-event-attr-2way', component:BindingEventAttributeComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsBindingRoutingModule { }
