import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import * as moment from 'moment';

@Pipe({
  name: 'localizedDate'
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private translocoService: TranslocoService) {}

  transform(value: any, format: string = 'LLLL'): string {
    const currentLang = this.translocoService.getActiveLang();
    let trformat = 'DD MMMM yyyy, dddd'
    moment.locale(currentLang);
    if(currentLang === 'tr'){
      return moment(value).format(trformat)
    }
    return moment(value).format(format);
  }
}
