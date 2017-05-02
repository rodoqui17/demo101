import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFormPage } from './my-form';

@NgModule({
  declarations: [
    MyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFormPage),
  ],
  exports: [
    MyFormPage
  ]
})
export class MyFormModule {}