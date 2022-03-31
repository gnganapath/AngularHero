import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';  // type -1
import { FormBuilder , FormGroup, Validators } from '@angular/forms';  // type -2

import { FormArray } from '@angular/forms';  // type -3

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {


  // form control
  name = new FormControl();  //new FormControl(''); define only the value get string.
  formBuilderSection:boolean = false;
  formArraySection:boolean = false; 



  //formBuilder
  employeeForm: FormGroup;


// profileForm = this.fb.group({
//   aliases: this.fb.array([
//       this.fb.control('')
//     ])
//   });

  //  get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('^\s*([a-zA-Z]*)\s*$')]],
      lastName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('^\s*([a-zA-Z]*)\s*$')]],
      address: this.fb.group({        // nested level of form group
          street: [''],
          city: [''],
          state: [''],
          zip: [''],
      
          })
    })
   }

  ngOnInit(): void {
  }

  getFormControlValue(){
    console.log(this.name.value)
  }
  setFormControlValue(){
    this.name.setValue('Data updated from Backend evnt');
  }

  resetFormControlValue(){
    this.name.reset();
  }


  //------------
  onSubmitFormBuilder(){
      console.log(this.employeeForm.value)

  }


resetFormBuilder(){
  this.employeeForm.reset();

}

updateFormValues(){

}

updatePartially(){
  let partObj = {
      firstName: 'gng',
      lastName: 'path',
      address: {street: 'KC Krisha', }    
     }
  this.employeeForm.patchValue(partObj);
}

updateDirectNestedLevel(){
    this.employeeForm.controls['firstName'].patchValue('ganapathi');
    //
}

  //

  onSubmit(){
    // console.log(this.profileForm.value)
  }
}
