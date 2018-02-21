import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { KalenderProvider } from '../../providers/kalender/kalender';

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
  

  constructor(private bvKalenderService:KalenderProvider,) { 
   this.getCalData();
   this.dataReady=false;
  }


  getCalData() {
    this.bvKalenderService.getData()
    .then(data => {
      this.calenderData = data;
      this.dataReady=true;
      console.log("Test");
    });
  }

  

}
