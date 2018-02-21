import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdresslistePage } from './adressliste';

@NgModule({
  declarations: [
    AdresslistePage,
  ],
  imports: [
    IonicPageModule.forChild(AdresslistePage),
  ],
})
export class AdresslistePageModule {}
