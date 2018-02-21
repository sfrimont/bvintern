import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule }from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { AufgabenPage } from '../pages/aufgaben/aufgaben';
import { BildergaleriePage } from '../pages/bildergalerie/bildergalerie';
import { AdresslistePage } from '../pages/adressliste/adressliste';
import { KalenderPage } from '../pages/kalender/kalender';
import { AndereTerminePage } from '../pages/andere-termine/andere-termine';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KalenderProvider } from '../providers/kalender/kalender';

@NgModule({
  declarations: [
    MyApp,
    KalenderPage,
    ListPage,
    AufgabenPage,
    BildergaleriePage,
    AdresslistePage,
    AndereTerminePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KalenderPage,
    ListPage,
    AufgabenPage,
    BildergaleriePage,
    AdresslistePage,
    AndereTerminePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KalenderProvider
  ]
})
export class AppModule {}
