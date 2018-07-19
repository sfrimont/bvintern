import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AnwesenheitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anwesenheit',
  templateUrl: 'anwesenheit.html',
})
export class AnwesenheitPage {

  public terminID;
  public sopran;
  public sopran2;
  public alt;
  public alt2;
  public tenor;
  public bariton;
  public bass;

  public anwesend;
  public namen;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
      this.terminID = this.navParams.get('id');
      this.anwesend = this.navParams.get('anwesend');
      this.namen = this.navParams.get('namen');
      this.sopran = this.navParams.get('sopran');
      this.sopran2 = this.navParams.get('sopran2');
      this.alt = this.navParams.get('alt');
      this.alt2 = this.navParams.get('alt2');
      this.tenor = this.navParams.get('tenor');
      this.bariton = this.navParams.get('bariton');
      this.bass = this.navParams.get('bass');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnwesenheitPage');
  }
   dismiss() {
       this.viewCtrl.dismiss();
   }
}
