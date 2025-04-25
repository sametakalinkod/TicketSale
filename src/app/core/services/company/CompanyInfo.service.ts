import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminEndPoints } from 'src/environments/adminEndPoints';
import { HttpService } from '../auth/Http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  constructor(private _httpService: HttpService) { }

  // checkCompanyDomain(model: any): Observable<any> {
  //   return this._httpService.post(adminEndPoints.companyInfo.checkCompanyDomain, model);
  // }

  getPmsTicketDefination(model: any): Observable<any> {
    return this._httpService.post(adminEndPoints.companyInfo.getPmsTicketDefination, model);
  }

  // getGroupDefination(model: any): Observable<any> {
  //   return this._httpService.post(adminEndPoints.companyInfo.getGroupDefination, model);
  // }
}
