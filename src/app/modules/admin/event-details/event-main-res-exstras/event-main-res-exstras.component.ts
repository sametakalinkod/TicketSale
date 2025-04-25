import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { PmsExtraProgramDefinitionsDto } from 'src/app/common/models/PmsExtraProgramDefinitionsDto';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { GlobalService } from 'src/app/core/services/global/global.service';

@Component({
  selector: 'app-event-main-res-exstras',
  templateUrl: './event-main-res-exstras.component.html',
  styleUrls: ['./event-main-res-exstras.component.scss']
})
export class EventMainResExstrasComponent implements OnInit {
  @Input() exstraServices: PmsExtraProgramDefinitionsDto[] | null = null;

  constructor(private _cookieService: CookieService,
    private _translocoService: TranslocoService
  ) { }

  ngOnInit() {
    // const htmlList = JSON.parse(this.selectedProductSessions.htmlList ?? '');
    // if (htmlList) {
    //   const model = {
    //     urls: new Array<HtmlReadDto>()
    //   };
    //   htmlList.forEach((item: any) => {
    //     const x = new HtmlReadDto();
    //     let decodedUrl = decodeURIComponent(item);
    //     decodedUrl = decodedUrl.replaceAll('\\', '/');
    //     const path = decodedUrl.split('/');
    //     const getLangCode = path[6].split('=');
    //     const langCode = getLangCode[2].split('.')[0];
    //     x.container = path[3];
    //     x.folder = path[5];
    //     x.langCode = langCode;
    //     x.filename = path[6];
    //     model.urls.push(x);
    //   });

    //   this._commonService.readHtml(model).subscribe((responseHtml) => {
    //     if (responseHtml.isSuccessful) {
    //       if (responseHtml.data.length > 0) {
    //         this.htmlEditorDto = responseHtml.data;
    //         this.htmlEditorDto.forEach((item) => {
    //           responseHtml.data.forEach((element: any) => {
    //             if (item.shortName === element.shortName) {
    //               item.value = element.value;
    //             }
    //           });
    //         });
    //       }

    //       this.htmlEditorValue = this.htmlEditorDto.find(x => x.shortName === this.language)?.value ?? '';
    //     }
    //   });
    // }
  }

  addBasket(item: PmsExtraProgramDefinitionsDto): void {

    const cookie = this._cookieService.getCookie('basketEvents');
    if (cookie) {
      const json = JSON.parse(cookie);
      const itemArray = json.find((x: { sessionId: any; }) => x.sessionId === item.programId);
      const extraServices = itemArray.extraServices;
      if (itemArray) {
        const extraItem = extraServices.find((x: { recId: string | undefined; }) => x.recId === item.recId);
        if (extraItem) {
          extraItem.count += 1;
        } else {
          item.count = 1;
          extraServices.push(item);
        }
        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.addedtobasket'),
          '',
          SweetalertType.success
        );
        GlobalService.sweetAlert(sweetAlertDto);
        this._cookieService.setCookie("basketEvents", JSON.stringify(json), 7);

      } else {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.addactivity'),
          '',
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
      }
    }
  }

  translate(key: string): any {
    return this._translocoService.translate(key);
  }
}
