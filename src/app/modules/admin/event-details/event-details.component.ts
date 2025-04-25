import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { HtmlReadDto } from 'src/app/common/models/HtmlReadDto';
import { PmsProductSessionsByIdDto } from 'src/app/common/models/PmsProductSessionsByIdDto';
import { PmsSalesForecastReportDto, TimeOnly } from 'src/app/common/models/PmsSalesForecastReportDto';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { LanguageListDto } from 'src/app/common/models/languageListDto';
import { CommonService } from 'src/app/core/services/common/Common.service';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { ProductsService } from 'src/app/core/services/products/Products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  selectedRecId: string | null = '';
  selectedProductSessions: PmsProductSessionsByIdDto = new PmsProductSessionsByIdDto();
  htmlEditorDto: LanguageListDto[] = [];
  htmlEditorValue: string = '';
  language: string = 'en';
  image: string = '';
  nonChildCheck: boolean = false;
  closeSaleCheck: boolean = false;
  selectablePackes: PmsSalesForecastReportDto[] = [];
  selectableDropDownSessions: PmsSalesForecastReportDto[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductsService,
    private _commonService: CommonService,
    private _cookieService: CookieService,
    private _router: Router,
    private _translocoService: TranslocoService
  ) { }


  ngOnInit() {

    this.language = localStorage.getItem('activeLang') ?? 'en';
    this._route.paramMap.subscribe((paramMap) => {

      if (paramMap.has('id')) {
        const guids = paramMap.get('id');

        const selectedEvent = guids && this.isBase64(guids) ? atob(guids) : null;


        if (!selectedEvent && guids) {
          localStorage.setItem("routerpurp", guids);
        } else {
          // localStorage.setItem("router", guids != null ? guids : '');
        }

        if (selectedEvent) {
          let value: string[] = selectedEvent?.split('date') ?? [];
          if (value?.length > 1) {
            this.selectedRecId = value[0]


            this.getSessionWithId(this.selectedRecId, value[1]);
          }
        } else {
          const defaultRedirect = this._router.config.find(r => r.path === '');
          console.log('Default redirect path:', defaultRedirect?.redirectTo);
          debugger
          this._router.navigate([defaultRedirect?.redirectTo]);
        }

      }
    });
  }
  isBase64(str: string) {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  }

  isGuid(input: string | null): boolean {
    const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return input ? guidRegex.test(input) : false;
  }

  getSessionWithId(tenant: string | null, date: any): void {
    if (!this.isGuid(tenant)) {
      return;
    }
    const recId = {
      productSessionId: tenant,
      eventDate: date
    };
    this._productService.getSessionWithId(recId).subscribe((response) => {
      if (response.isSuccessful) {

        this.selectedProductSessions = response.data;

        this.selectedProductSessions.programNameDisplay = this.parseOrDefault(this.selectedProductSessions.programName, this.language, this.selectedProductSessions.programName)
        this.selectedProductSessions.sessions.forEach((element) => {
          element.detailRemarkDisplay = this.parseOrDefault(element.detailRemark, this.language, element.detailRemark);
          element.remarkDisplay = this.parseOrDefault(element.remark, this.language, element.remark);
        });
        this.selectedProductSessions.extraProgram.forEach((element) => {
          element.nameDisplay = this.parseOrDefault(element.name, this.language, element.name);
        });
        this.closeSaleCheck = this.selectedProductSessions?.closeSaleType === 2 ? true : false;

        this.selectedProductSessions.sessions = this.selectedProductSessions.sessions.filter(session => session.onAir === true);
        this.selectableDropDownSessions = this.selectedProductSessions.sessions.filter(session => session.onAir === true).filter(x => x.isActive !== true);

        const uniqueAreas = new Set<string>();

        this.selectablePackes = this.selectedProductSessions.sessions.filter(session => {
          if (session?.detailRemark && uniqueAreas.has(session?.detailRemark)) {
            return false; // If area is already in the set, filter it out
          } else if (session.detailRemark) {
            uniqueAreas.add(session.detailRemark); // Otherwise, add it to the set and keep it
            return true;
          } else {
            return false;
          }
        }).sort((a, b) => {
          if (a.detailRemark === undefined && b.detailRemark === undefined) {
            return 0;
          }
          if (a.detailRemark === undefined) {
            return 1;
          }
          if (b.detailRemark === undefined) {
            return -1;
          }
          if (a.detailRemark < b.detailRemark) {
            return -1;
          }
          if (a.detailRemark > b.detailRemark) {
            return 1;
          }
          return 0;
        });;



        //gecici cozum

        this.selectedProductSessions.extraProgram.forEach(element => {
          element.programId = this.selectedProductSessions.sessions[0].productId;
        });
        this.image = this.selectedProductSessions.imageList[0];
        const htmlList = JSON.parse(this.selectedProductSessions.htmlList ?? '');
        const htmlListPackages: string[] = [];

        this.selectablePackes.forEach(element => {
          if (!this.isNullOrEmpty(element.packagesHtml) && element.packagesHtml !== '[]') {
            htmlListPackages.push(element.packagesHtml ?? '');
          }
        });

        // htmlListPackages.forEach(element => {
        //   if (!this.isNullOrEmpty(element)) {
        //     const list = JSON.parse(element);
        //     htmlList.pus(...list);
        //   }
        // });
        if (htmlList) {
          const model = {
            urls: new Array<HtmlReadDto>()
          };
          htmlList.forEach((item: any) => {
            const x = new HtmlReadDto();
            let decodedUrl = decodeURIComponent(item);
            decodedUrl = decodedUrl.replaceAll('\\', '/');
            const path = decodedUrl.split('/');
            const getLangCode = path[6].split('=');
            const langCode = getLangCode[2].split('.')[0];
            x.container = path[3];
            x.folder = path[5];
            x.langCode = langCode;
            x.filename = path[6];
            model.urls.push(x);
          });

          htmlListPackages.forEach(element => {
            if (!this.isNullOrEmpty(element)) {
              const list = JSON.parse(element);
              const item = this.selectablePackes.find(x => x.packagesHtml === element);
              if (list && item) {

                item.htmlCommonId = crypto.randomUUID();

                list.forEach((element: string) => {
                  const x = new HtmlReadDto();
                  let decodedUrl = decodeURIComponent(element);
                  decodedUrl = decodedUrl.replaceAll('\\', '/');
                  const path = decodedUrl.split('/');
                  const getLangCode = path[6].split('=');
                  const langCode = getLangCode[2].split('.')[0];
                  x.container = path[3];
                  x.folder = path[5];
                  x.langCode = langCode;
                  x.filename = path[6];
                  x.id = item?.htmlCommonId;
                  model.urls.push(x);
                });
              }
            }
          });
          this._commonService.readHtml(model).subscribe((responseHtml) => {
            if (responseHtml.isSuccessful) {
              if (responseHtml.data.length > 0) {
                this.selectablePackes.forEach(elementMain => {
                  if (!this.isNullOrEmpty(elementMain.packagesHtml) && elementMain.packagesHtml !== '[]') {

                    responseHtml.data.forEach((element: { id: string | undefined; shortName: string | undefined; value: string | undefined; }) => {
                      if (elementMain.htmlCommonId === element.id) {

                        if (!elementMain.htmls) {
                          elementMain.htmls = [];
                        }
                        const newItem = new LanguageListDto();
                        newItem.shortName = element.shortName;
                        newItem.value = element.value;
                        elementMain.htmls.push(newItem);
                      }
                    });
                  }

                });
                this.htmlEditorDto = responseHtml.data.filter((x: { id: string; }) => x.id === '00000000-0000-0000-0000-000000000000');


              }

              this.selectablePackes.forEach(element => {

                if (element.htmls && element.htmls !== null && element.htmls.length > 0)
                  element.currentHtml = element.htmls.find(x => x.shortName === this.language)?.value ?? element.htmls[0].value;
              });
              this.htmlEditorValue = this.htmlEditorDto.find(x => x.shortName === this.language)?.value ?? '';
            }
          });
        }


      } else {
      }
    });
  }
  isNullOrEmpty(value: any): boolean {
    if (value === undefined || value === null || value === "") {
      return true;
    }
    return false;
  }

  async addBasketPackages(item: PmsSalesForecastReportDto): Promise<void> {
    if (item.remainder <= 0) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.error'),
        this.translate('sweetalert.soldout'),
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
      return;
    }
    if (item.isActive) {
      window.open(item.routeLink, '_blank');
      return;
    }
    const selectedEvent = this.selectedProductSessions.sessions.find(x => x.programDetailId === item.programDetailId);
    if (selectedEvent) {
      const cookie = this._cookieService.getCookie('basketEvents');
      this.nonChildCheck = this.isAnyAmacChildNonZero(selectedEvent);
      const rmeinder = ((selectedEvent.capacityWeb ?? 0) - (selectedEvent.sold ?? 0)) ?? 0;

      this.selectedProductSessions.extraProgram.forEach(program => {
        program.count = 0;
      });

      const today = new Date();
      const model = [{
        category: selectedEvent.detailRemark,
        sessionId: selectedEvent.productId,
        itemRecId: selectedEvent.programDetailId,
        image: this.image,
        date: selectedEvent.date,
        sessionTime: selectedEvent.seanceBegin,
        childPrice: selectedEvent.currChildPrice,
        adultPrice: selectedEvent.currAdultPrice,
        unitPrice: selectedEvent.currUnitPrice,
        adultCount: selectedEvent.calculateType === 1 ? selectedEvent.minPax : 1,
        childCount: 0,
        title: selectedEvent.remark,
        totalPrice: (selectedEvent.currUnitPrice !== null && selectedEvent.currUnitPrice !== 0) ? selectedEvent.currUnitPrice : selectedEvent.currAdultPrice,
        remark: selectedEvent.remark,
        extraServices: [],
        propertyId: this.selectedProductSessions?.propertyId,
        maxPax: selectedEvent.maxPax,
        minPax: selectedEvent.minPax,
        calculateType: selectedEvent.calculateType,
        childCheck: this.nonChildCheck,
        maxChildAge: selectedEvent.maxChildAge ?? 18,
        minChildAge: selectedEvent.minChildAge,
        reminder: rmeinder,
        freeFemaleCustomer: selectedEvent.freeFemaleCustomer,
        avaliableExtras: this.selectedProductSessions.extraProgram,
        addedDate: today
      }]



      if (cookie) {
        const json = JSON.parse(cookie);
        model.push(...json)
      }

      this._cookieService.setCookie("basketEvents", JSON.stringify(model), 1);
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.addedtobasket'),
        '',
        SweetalertType.success
      );
      GlobalService.sweetAlert(sweetAlertDto);

      setTimeout(() => {
        Swal.close();
      }, 1000);
    }

  }

  isAnyAmacChildNonZero(selectedProductSession: PmsSalesForecastReportDto): boolean {
    return selectedProductSession.currChildPrice === null || selectedProductSession.currChildPrice === 0;
  }

  translate(key: string): any {
    return this._translocoService.translate(key);
  }

  parseOrDefault(input: any, langCode: any, defaultDisplay: any): string {
    try {
      const value = JSON.parse(input);
      if (!GlobalService.isNullOrEmpty(value)) {
        return value.find((x: { shortName: any }) => x.shortName === langCode)?.value ?? value[0].value;
      }
    } catch (error) {
    }
    return input;
  }
}
