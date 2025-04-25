import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StorageDto } from '../../models/localStorage/storageDto';
import { HttpService } from '../auth/Http.service';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import { TicketFactSheetDto } from '../../models/localStorage/TicketFactSheetDto';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  static tokenInfoModel: StorageDto;
  static factSheetDef: TicketFactSheetDto;

  private subject = new Subject<any>();
  static _translocoService: any;
  constructor(
    private _httpService: HttpService
  ) { }


  static tokenInfo(): StorageDto {
    const result = localStorage.getItem('accessToken');
    if (result) {
      this.tokenInfoModel = jwtDecode(result ?? "") as StorageDto;
      return this.tokenInfoModel;
    } else {
      return new StorageDto();
    }
  }

  static getFactSheetDef(): TicketFactSheetDto | null {
    const result = localStorage.getItem("companyFactSheetDef");

    if (result) {
      this.factSheetDef = JSON.parse(result ?? "") as TicketFactSheetDto;
      return this.factSheetDef;
    } else {
      return null;
    }
  }

  sendClickEvent(calendar: boolean) {
    this.subject.next(calendar);
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }



  static sweetAlert(model: SweetAlertDto): void {
    const sweetIcon = this.convertToSweetAlertIconType(model.icon);
    Swal.fire({
      title: model.title,
      text: model.text,
      icon: sweetIcon,
      confirmButtonText: 'Ok',
    });
  }
  static sweetAlertHtml(model: SweetAlertDto): void {
    const sweetIcon = this.convertToSweetAlertIconType(model.icon);
    Swal.fire({
      title: model.title,
      html: model.text,
      icon: sweetIcon,
      confirmButtonText: 'Ok',
    });
  }
  static sweetAlertOk(model: SweetAlertDto): Promise<SweetAlertResult<any>> {
    const sweetIcon = this.convertToSweetAlertIconType(model.icon);
    return Swal.fire({
      title: model.title,
      html: model.text,
      icon: sweetIcon,
      confirmButtonText: 'Ok',
    });
  }
  static convertToSweetAlertIconType(sweetType: SweetalertType): any {
    switch (sweetType) {
      case SweetalertType.success:
        return 'success';
      case SweetalertType.error:
        return 'error';
      case SweetalertType.info:
        return 'info';
      case SweetalertType.question:
        return 'question';
      case SweetalertType.warning:
        return 'warning';
      default:
        return 'success';
    }
  }

  //   static getSelectedLanguageCode(): string {
  //     const languageCode = localStorage.getItem('activeLang');
  //      
  //     if(languageCode?.length>0 && languageCode!=undefined){
  //       return languageCode;
  // }

  // }


  // static sweetAlert(model: SweetAlertDto): void {
  //   const sweetIcon = this.convertToSweetAlertIconType(model.icon);
  //   Swal.fire({
  //     title: model.title,
  //     text: model.text,
  //     icon: sweetIcon,
  //     confirmButtonText: 'Ok',
  //   });
  // }
  // static sweetAlertHtml(model: SweetAlertDto): void {
  //   const sweetIcon = this.convertToSweetAlertIconType(model.icon);
  //   Swal.fire({
  //     title: model.title,
  //     html: model.text,
  //     icon: sweetIcon,
  //     confirmButtonText: 'Ok',
  //   });
  // }
  // static sweetAlertOk(model: SweetAlertDto): Promise<SweetAlertResult<any>> {
  //   const sweetIcon = this.convertToSweetAlertIconType(model.icon);
  //   return Swal.fire({
  //     title: model.title,
  //     html: model.text,
  //     icon: sweetIcon,
  //     confirmButtonText: 'Ok',
  //   });
  // }
  // static convertToSweetAlertIconType(sweetType: SweetalertType): any {
  //   switch (sweetType) {
  //     case SweetalertType.success:
  //       return 'success';
  //     case SweetalertType.error:
  //       return 'error';
  //     case SweetalertType.info:
  //       return 'info';
  //     case SweetalertType.question:
  //       return 'question';
  //     case SweetalertType.warning:
  //       return 'warning';
  //     default:
  //       return 'success';
  //   }
  // }

  // static sweetAlertOfQuestion(
  //   model: SweetAlertDto,
  //   confirmButtonText?: string,
  //   cancelButtonText?: string
  // ): Promise<SweetAlertResult<any>> {
  //   if (typeof confirmButtonText == "undefined")
  //     confirmButtonText = "Yes";
  //   if (typeof cancelButtonText == "undefined")
  //     cancelButtonText = "Cancel";
  //   const sweetIcon = this.convertToSweetAlertIconType(model.icon);
  //   return Swal.fire({
  //     title: model.title,
  //     text: model.text,
  //     icon: sweetIcon,
  //     confirmButtonText: confirmButtonText,
  //     cancelButtonText: cancelButtonText,
  //     allowEnterKey: false,
  //     showCancelButton: true,
  //     confirmButtonColor: '#1878C6',
  //     cancelButtonColor: '#DF3B3B',
  //   });
  // }
  static isNullOrEmpty(value: any): boolean {
    if (value === undefined || value === null || value === '') {
      return true;
    }
    return false;
  }
}  
