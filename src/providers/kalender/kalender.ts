import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the KalenderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KalenderProvider {

	private googleURL="https://www.googleapis.com/calendar/v3/calendars/arilvube4af7eb1sdiil44c2uk@group.calendar.google.com/events?key=AIzaSyBUfymwqsh1vimIuCjJhioO42MPH3Nk_FU&orderBy=startTime&singleEvents=true&maxResults=2500";

   

  constructor(public http: HttpClient) {}
  	
  

 getData() {
  return new Promise(resolve => {
    this.http.get<object[]>(this.googleURL).subscribe(data => {
      resolve(data);
      console.log("Daten erfolgreich geladen");
      
    }, err => {
      console.log(err);
      
    });
  });
  
  }
  

}
