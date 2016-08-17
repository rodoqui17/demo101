import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'build/pages/my-form/my-form.html',
})
export class MyFormPage {

  myForm: FormGroup;
  
  constructor(
    private nav: NavController,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this._createMyForm();
  }
  
  saveData(){
    console.log(this.myForm.value);
  }
  
  private _createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }
}
