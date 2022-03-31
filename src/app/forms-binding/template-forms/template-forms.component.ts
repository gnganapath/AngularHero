import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.less']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerTemplateForm(regForm: NgForm){
    console.log(regForm.value);
  }

}
