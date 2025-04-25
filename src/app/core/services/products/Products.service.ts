import { Injectable } from '@angular/core';
import { HttpService } from '../auth/Http.service';
import { adminEndPoints } from 'src/environments/adminEndPoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http: HttpService

  ) { }


  getPmsSalesForecastReport(data: any): Observable<any> {
    return this._http.post(adminEndPoints.products.getPmsSalesForecastReport, data);
  }

  getActiveEvents(data: any): Observable<any> {
    return this._http.post(adminEndPoints.products.getValidProgramsByDate, data);
  }

  getSessionWithId(data: any): Observable<any> {
    return this._http.post(adminEndPoints.products.getSessionWithId, data);
  }

  getPrivacyDocumentsByProperty(data: any): Observable<any> {
    return this._http.post(adminEndPoints.products.getPrivacyDocumentsByProperty, data);
  }
}
