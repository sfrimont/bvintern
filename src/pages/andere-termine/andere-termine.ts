import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { KalenderProvider } from '../../providers/kalender/kalender';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
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

    public user = firebase.auth().currentUser.uid;

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

  public anwesend = {};

  constructor(private bvKalenderService:KalenderProvider, public navCtrl: NavController, public popoverCtrl: PopoverController) {
   this.getCalData();
   this.dataReady=false;
   this.initAnwesendArray();
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




    initAnwesendArray() {
        let database = firebase.database();
        let anwesend = database.ref('/termine/');
        let that = this;
        anwesend.on("value", function(snap) {
            snap.forEach(function (childSnap) {
                //console.log("termin: "+childSnap.key);// childSnap.child.val().anwesend;
                that.anwesend[childSnap.key]={};
                childSnap.forEach(function (user) {
                    //console.log("user: "+user.key);
                    //console.log("anwesend: "+user.val().anwesend)
                    that.anwesend[childSnap.key][user.key]=user.val().anwesend;
                    
                });

            });
        });
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
                that.sopran.push(childSnap.key);
            }

             if (childSnap.val().Stimmgruppe == "Sopran 2") {
                 that.sopran2.push(childSnap.key);
             }

             if (childSnap.val().Stimmgruppe == "Alt 1") {
                 that.alt.push(childSnap.key);
             }
             if (childSnap.val().Stimmgruppe == "Alt 2") {
                 that.alt2.push(childSnap.key);
             }
             if (childSnap.val().Stimmgruppe == "Tenor") {
                 that.tenor.push(childSnap.key);
             }
             if (childSnap.val().Stimmgruppe == "Bariton") {
                 that.bariton.push(childSnap.key);
             }
             if (childSnap.val().Stimmgruppe == "Bass") {
                 that.bass.push(childSnap.key);
             }

             return false;
         });

      });
    }

    stimmen() {
        console.log("hallo");
        /*
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: myEvent
        });
        */
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
