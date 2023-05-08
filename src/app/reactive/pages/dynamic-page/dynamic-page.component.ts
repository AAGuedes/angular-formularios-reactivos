import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoritedGames: this.formBuilder.array([
      ['Metal Gear', Validators.required ],
      ['Death Stranding', Validators.required ],
    ])
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  get favoritedGames() {
    return this.myForm.get('favoritedGames') as FormArray;
  }

  onSubmit(): void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
  }

}
