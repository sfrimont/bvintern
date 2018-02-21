import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AufgabenPage } from '../pages/aufgaben/aufgaben';
import { BildergaleriePage } from "../pages/bildergalerie/bildergalerie";
import { AdresslistePage } from "../pages/adressliste/adressliste";
//import { KalenderPage } from "../pages/kalender/kalender";
import { AndereTerminePage } from "../pages/andere-termine/andere-termine";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AndereTerminePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Terminkalender', component: AndereTerminePage },
      { title: 'Aufgabenverteilung', component: AufgabenPage},
      { title: 'Bildergalerie', component: BildergaleriePage},
      { title: 'Adressliste', component: AdresslistePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
