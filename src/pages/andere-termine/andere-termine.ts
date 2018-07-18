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
  public  sopran2 = new Array();
  public  alt = new Array();
  public  alt2 = new Array();
  public  tenor = new Array();
  public  bariton = new Array();
  public  bass = new Array();

  public userAnwesend = {};

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
      this.initVoiceArrays();
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



    /*
    initAnwesenheitMap(eventID) {
        let database = firebase.database();
        let anwesend = database.ref('/termine/'+eventID);
        let that = this;
        anwesend.on("value", function(snap) {
            snap.forEach(function (childSnap) {
                that.userAnwesend[childSnap.toString()] = "ja";// childSnap.child.val().anwesend;
            });
        });
    }
    */

    getAnwesend(userID,eventID) {

        //firebase.database().ref('/termine/'+eventID+'/' + userID).toString()
        let database= firebase.database();
        let anwesend = database.ref('/termine/'+eventID+'/' + userID);
        let that = this;
        /*
        return new Promise((resolve,reject) => {
            resolve("ja");

            anwesend.on("value", function(snap) {
                // resolve(snap.val().anwesend);
                resolve("ja");
            });

        });

        return new Observable<string>((observer: Observer<string>) => {
            setInterval(() => observer.next(new Date().toString()), 1000)
        });*/
        return "ja";
    }


    initVoiceArrays() {

      let database = firebase.database();
      let users = database.ref('/users');
      let that = this;
      users.on("value", function (snap) {

          that.sopran = new Array();
          that.sopran2 = new Array();
          that.alt = new Array();
          that.alt2 = new Array();
          that.tenor = new Array();
          that.bariton = new Array();
          that.bass = new Array();


         snap.forEach(function (childSnap) {


            if (childSnap.val().Stimmgruppe == "Sopran 1") {
                that.sopran.push(snap.val());
            }

             if (childSnap.val().Stimmgruppe == "Sopran 2") {
                 that.sopran2.push(snap.val());
             }

             if (childSnap.val().Stimmgruppe == "Alt 1") {
                 that.alt.push(snap.val());
             }
             if (childSnap.val().Stimmgruppe == "Alt 2") {
                 that.alt2.push(snap.val());
             }
             if (childSnap.val().Stimmgruppe == "Tenor") {
                 that.tenor.push(snap.val());
             }
             if (childSnap.val().Stimmgruppe == "Bariton") {
                 that.bariton.push(snap.val());
             }
             if (childSnap.val().Stimmgruppe == "Bass") {
                 that.bass.push(snap.val());
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
