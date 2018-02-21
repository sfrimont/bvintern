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

    if (value != undefined)
                        return new Date(value).toLocaleDateString();
                    else
                        return null;
  }
}
