import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KalenderPage } from './kalender';

@NgModule({
  declarations: [
    KalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(KalenderPage),
  ]
})
export class KalenderPageModule {}
