import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DatumPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'datum',
})
export class DatumPipe implements PipeTransform {
  /**
   * Konvertiert ein Datum in einen String
   */
  transform(value: string): string {
    let wochentag: string;
    if (value != undefined) {
                        wochentag = new Date(value).getDay()
                        if (wochentag==0) wochentag="So ,");
                        if (wochentag==1) wochentag="Mo ,");
                        if (wochentag==2) wochentag="Di ,");
                        if (wochentag==3) wochentag="Mi ,");
                        if (wochentag==4) wochentag="Do ,");
                        if (wochentag==5) wochentag="Fr ,");
                        if (wochentag==6) wochentag="Sa ,");
                        return wochentag + new Date(value).toLocaleDateString();
    } else
                        return null;
  }
}
