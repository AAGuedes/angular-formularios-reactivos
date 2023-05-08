import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: '2500',
  inStorage: '5',
}


@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    price: [ 0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [ 0, [ Validators.required, Validators.min(0) ] ],
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  onSave(): void {
    if(this.myForm.invalid) return;
    console.log(this.myForm.value);
    this.myForm.reset({ price: 0, inStorage: 0 });
  }

}
