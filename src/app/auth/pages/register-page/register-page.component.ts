import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as customValidators from 'src/app/shared/validators/validators';


@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern) ]],
    email: ['', [ Validators.required, Validators.pattern(customValidators.emailPattern) ]],
    username: ['', [ Validators.required, customValidators.candBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]]
  })

  constructor(
    private formBuilder: FormBuilder
  ) {}

  isValidField(field:string) {

  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
