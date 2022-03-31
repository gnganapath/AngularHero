import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms-binding',
  templateUrl: './forms-binding.component.html',
  styleUrls: ['./forms-binding.component.less']
})
export class FormsBindingComponent implements OnInit {

  public userForm;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [  "",[ Validators.required, Validators.maxLength(50),Validators.pattern('^[a-zA-Z ]*$') ]],
      lastName:  [  "",[ Validators.required, Validators.maxLength(50),Validators.pattern('^[a-zA-Z ]*$') ]],
    });
  }

  onFormSubmit() {
    //alert(this.userForm.value);
    console.log(this.userForm.value);
  }

  ngOnInit(): void {
  }

}
