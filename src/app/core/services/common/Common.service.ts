import { Injectable } from '@angular/core';
import { HttpService } from '../auth/Http.service';
import { adminEndPoints } from 'src/environments/adminEndPoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpService: HttpService) { }

  readHtml(model: any): Observable<any> {
    return this._httpService.post(adminEndPoints.common.readHtml, model)
  }
}
