import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AufgabenPage } from './aufgaben';

@NgModule({
  declarations: [
    AufgabenPage,
  ],
  imports: [
    IonicPageModule.forChild(AufgabenPage),
  ],
})
export class AufgabenPageModule {}
