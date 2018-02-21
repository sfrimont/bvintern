import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TerminfilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'terminfilter',
})
export class TerminfilterPipe implements PipeTransform {
  transform(termin: any[], monat:string) {
  	   var neueTermine = termin.filter(item => ((item.start && item.start.date && item.start.date.substring(0,7)===monat))
  	   	                                       || item.start && item.start.dateTime && item.start.dateTime.substring(0,7)===monat);
    console.log(neueTermine);
    return neueTermine;
  	
  }
}
