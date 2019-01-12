import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnwesenheitProbePage } from './anwesenheit-probe';

@NgModule({
  declarations: [
    AnwesenheitProbePage,
  ],
  imports: [
    IonicPageModule.forChild(AnwesenheitProbePage),
  ],
})
export class AnwesenheitProbePageModule {}
