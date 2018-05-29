import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { KalenderProvider } from '../../providers/kalender/kalender';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the AndereTerminePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-andere-termine',
  templateUrl: 'andere-termine.html',
})
export class AndereTerminePage {

  public calenderData:any;
  public dataReady:boolean;
  public refresher: any;


  constructor(private bvKalenderService:KalenderProvider, public navCtrl: NavController) {
   this.getCalData();
   this.dataReady=false;
  }

    doRefresh(rf) {
      this.refreshCalData(rf);
    }

  getCalData() {
    this.bvKalenderService.getData()
    .then(data => {
      this.calenderData = data;
      this.dataReady=true;
    });
  }

    refreshCalData(refresher) {
        this.bvKalenderService.getData()
            .then(data => {
                this.calenderData = data;
                refresher.complete();
            });
    }



  

}
