import { Injectable } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeTr from '@angular/common/locales/tr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeTr, 'tr');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeDe, 'de');


@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private currentLocale: string = 'en-US';

  constructor() { }

  setLocale(locale: string) {
    this.currentLocale = locale;
  }

  getLocale(): string {
    return this.currentLocale;
  }
}
