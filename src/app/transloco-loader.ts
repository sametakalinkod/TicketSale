import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        let baseUrl = window.location.protocol + '//' + window.location.host;

        return this.http.get<Translation>(`${baseUrl.toLowerCase()}/assets/i18n/${lang}.json`);
    }


}
