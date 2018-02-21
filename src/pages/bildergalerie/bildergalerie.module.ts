import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BildergaleriePage } from './bildergalerie';

@NgModule({
  declarations: [
    BildergaleriePage,
  ],
  imports: [
    IonicPageModule.forChild(BildergaleriePage),
  ],
})
export class BildergaleriePageModule {}
