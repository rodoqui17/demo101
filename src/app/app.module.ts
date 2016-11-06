import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyFormPage } from '../pages/my-form/my-form';

@NgModule({
  declarations: [
    MyApp,
    MyFormPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyFormPage
  ],
  providers: []
})
export class AppModule {}