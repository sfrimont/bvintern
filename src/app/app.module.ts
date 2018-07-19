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
import { HomePage } from '../pages/home/home';

import { AnwesenheitPage } from '../pages/anwesenheit/anwesenheit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KalenderProvider } from '../providers/kalender/kalender';
import { DropboxProvider } from '../providers/dropbox/dropbox';

import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

import { FileTransfer } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { Media  } from '@ionic-native/media';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import {AudioplayerPage} from "../pages/audioplayer/audioplayer";
import { AuthProvider } from '../providers/auth/auth';
import {SigninPage} from "../pages/signin/signin";

import { FileOpener } from '@ionic-native/file-opener';

/**
 * Sample custom factory function to use with ionic-audio
 */
export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    KalenderPage,
    ListPage,
    AufgabenPage,
    BildergaleriePage,
    AdresslistePage,
    AndereTerminePage,
    HomePage,
      SigninPage,
      AudioplayerPage,
      AnwesenheitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    PipesModule,
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
      PdfViewerModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KalenderPage,
    ListPage,
    AufgabenPage,
    BildergaleriePage,
    AdresslistePage,
    AndereTerminePage,
    HomePage,
      SigninPage,
      AudioplayerPage,
      AnwesenheitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KalenderProvider,
    DropboxProvider,
      FileTransfer,
      File,
      HTTP,
      Media,
    AuthProvider,
      FileOpener
  ]
})
export class AppModule {}
