import { HttpClient } from '@angular/common/http';
import {
    Translation,
    TRANSLOCO_CONFIG,
    TRANSLOCO_LOADER,
    translocoConfig,
    TranslocoModule,
    TranslocoService,
    TranslocoLoader,
} from '@ngneat/transloco';
import { APP_INITIALIZER, NgModule, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    constructor(private http: HttpClient) { }
    getTranslation(lang: string) {
        return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }
}
const userCountry = localStorage.getItem('userCountry');
const availableLangs = ['de', 'en', 'fr', 'ru', 'tr'];
const defaultLang = userCountry && availableLangs.includes(userCountry.toLowerCase()) ? userCountry.toLowerCase() : 'en';

@NgModule({

    exports: [TranslocoModule],
    providers: [{
        provide: TRANSLOCO_CONFIG,
        useValue: translocoConfig({
            availableLangs: availableLangs,
            defaultLang: defaultLang,
            reRenderOnLangChange: true,
            prodMode: environment.production,
        })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ]

})
export class TranslocoRootModule { }
