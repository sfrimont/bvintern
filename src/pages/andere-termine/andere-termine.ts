import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { KalenderProvider } from '../../providers/kalender/kalender';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

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

  public  sopran = new Array();
  //public  sopran2 = new Array();
  public  alt = new Array();
  //public  alt2 = new Array();
  public  tenor = new Array();
  //public  bariton = new Array();
  public  bass = new Array();


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

    setAnwesend(eventID,status) {
        //let database = firebase.database();
        let user = firebase.auth().currentUser;
        firebase.database().ref('/termine/'+eventID+'/' + user.uid).set({
            anwesend: status
        });
    }


    setVoiceArrays(eventID) {

      let database = firebase.database();
      let user = firebase.auth().currentUser;
      let anwesend = database.ref('/users');
      let that = this;
      anwesend.on("value", function (snap) {

          that.sopran = new Array();
          //that.sopran2 = new Array();
          that.alt = new Array();
          //that.alt2 = new Array();
          that.tenor = new Array();
          //that.bariton = new Array();
          that.bass = new Array();


         snap.forEach(function (childSnap) {


            if (childSnap.val().Stimmgruppe == "Sopran 1") {
                that.sopran.push(user.uid);
            }

             if (childSnap.val().Stimmgruppe == "Sopran 2") {
                 that.sopran.push(user.uid);
             }

             if (childSnap.val().Stimmgruppe == "Alt 1") {
                 that.alt.push(user.uid);
             }
             if (childSnap.val().Stimmgruppe == "Alt 2") {
                 that.alt.push(user.uid);
             }
             if (childSnap.val().Stimmgruppe == "Tenor") {
                 that.tenor.push(user.uid);
             }
             if (childSnap.val().Stimmgruppe == "Bariton") {
                 that.bass.push(user.uid);
             }
             if (childSnap.val().Stimmgruppe == "Bass") {
                 that.bass.push(user.uid);
             }


             return false;
         });

      });
    }


    /*
    setVoiceArrays(termin)
    database.ref().once("value", function(snap){
        snap.forEach(function(childSnap) {
            scores['Name'].push(childSnap.val().Name);
            scores['Score'].push(childSnap.val().Score);
        });
    });

    var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});
    */

  

}
