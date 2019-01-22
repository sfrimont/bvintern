import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProbenProtokollPage } from './proben-protokoll';

@NgModule({
  declarations: [
    ProbenProtokollPage,
  ],
  imports: [
    IonicPageModule.forChild(ProbenProtokollPage),
  ],
})
export class ProbenProtokollPageModule {}
