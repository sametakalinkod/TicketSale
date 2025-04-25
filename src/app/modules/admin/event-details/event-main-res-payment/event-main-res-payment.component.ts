import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailsBasketComponent } from '../dialogs/event-details-basket/event-details-basket.component';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { PmsProductSessionsByIdDto } from 'src/app/common/models/PmsProductSessionsByIdDto';
import { PmsSalesForecastReportDto, TimeOnly } from 'src/app/common/models/PmsSalesForecastReportDto';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import Swal from 'sweetalert2';
import { TranslocoService } from '@ngneat/transloco';
import { PmsExtraProgramDefinitionsDto } from 'src/app/common/models/PmsExtraProgramDefinitionsDto';
import { TicketFactSheetDto } from 'src/app/core/models/localStorage/TicketFactSheetDto';

@Component({
  selector: 'app-event-main-res-payment',
  templateUrl: './event-main-res-payment.component.html',
  styleUrls: ['./event-main-res-payment.component.scss']
})
export class EventMainResPaymentComponent implements OnInit, AfterViewChecked {
  @Input() selectedEventId: string | null = null;
  @Input() html: string | null = null;
  @Input() image: string | null = null;
  @Input() selectedProductData: PmsProductSessionsByIdDto | null = new PmsProductSessionsByIdDto();
  @Input() extraServices?: PmsExtraProgramDefinitionsDto[];
  selectedSeance: any;
  selectedCategory: any;

  basketItemDetails = [{
    'eventid': "23423423423fgd",
  }]
  adultCount: number = 1;
  childCount: number = 0;
  slideIndex = 1;


  categoriesFiltered: PmsSalesForecastReportDto[] = [];
  seancesFiltered: PmsSalesForecastReportDto[] = [];
  viewChecked = false;
  currPrice?: number;
  currSymbol?: string;
  totalPrice: number = 0;
  nonChildCheck: boolean = false;
  saleClosed: boolean = false;
  petitRoute: boolean = false;
  routePage: boolean = false;

  companyFactSheetDef?: TicketFactSheetDto;
  langCode: string = 'tr';

  constructor(
    private _cookieService: CookieService,
    private _dialog: MatDialog,
    private _translocoService: TranslocoService,
    private _cdr: ChangeDetectorRef
  ) {
    if (localStorage.getItem("companyFactSheetDef")) {

      this.companyFactSheetDef = JSON.parse(localStorage.getItem("companyFactSheetDef") ?? "") as TicketFactSheetDto;
      this.langCode = this._translocoService.getActiveLang();

      this.setJsonValuesWithLangCode(this.companyFactSheetDef, this.langCode)
    }
  }

  ngAfterViewChecked(): void {
    this.selectedProductData;
    if (this.selectedProductData?.sessions && this.selectedProductData.sessions.length > 0 && !this.viewChecked) {

      const uniqueAreas = new Set<string>();

      this.seancesFiltered = this.selectedProductData.sessions
        .filter(session => session.onAir === true)
        .filter(x => x.isActive !== true).filter(session => {
          if (session?.seanceBegin && uniqueAreas.has(session?.seanceBegin)) {
            return false; // If area is already in the set, filter it out
          } else if (session.seanceBegin) {
            uniqueAreas.add(session.seanceBegin); // Otherwise, add it to the set and keep it
            return true;
          } else {
            return false;
          }
        });

      this.seancesFiltered.sort((a, b) => {

        const aBegin = a.seanceBegin ? a.seanceBegin : "";
        const bBegin = b.seanceBegin ? b.seanceBegin : "";
        return aBegin.localeCompare(bBegin);
      });
      // this.nonChildCheck = this.isAnyAmacChildNonZero(this.seancesFiltered);

      //the format in seancesFiltered is like 09:00:00, we need to convert it to 09:00. To not change seanceBegin value, we create a new property seanceBeginDisplay
      this.seancesFiltered.forEach(x => {
        x.seanceBeginDisplay = x.seanceBegin?.substring(0, 5);
      });

      this.viewChecked = true;
      this.petitRoute = this.selectedProductData.programName?.toLocaleLowerCase().includes('petit') ? true : false;

      this.saleClosed = this.selectedProductData?.closeSaleType === 2 ? true : false;
      this.routePage = !this.isNullOrEmpty(this.selectedProductData?.routeLink);
    }

  }

  timeOnlyToString(time: TimeOnly): string {
    const hours = time.hours !== undefined ? time.hours.toString().padStart(2, '0') : "00";
    const minutes = time.minutes !== undefined ? time.minutes.toString().padStart(2, '0') : "00";
    const seconds = time.seconds !== undefined ? time.seconds.toString().padStart(2, '0') : "00";
    return `${hours}:${minutes}:${seconds}`;
  }
  compareTimeOnly(a: any, b: any) {

    const aTime = (a.hours ?? 0) * 3600 + (a.minutes ?? 0) * 60 + (a.seconds ?? 0);
    const bTime = (b.hours ?? 0) * 3600 + (b.minutes ?? 0) * 60 + (b.seconds ?? 0);
    return aTime - bTime;
  }


  isAnyAmacChildNonZero(selectedProductSession: PmsSalesForecastReportDto): boolean {
    return selectedProductSession.currChildPrice === null || selectedProductSession.currChildPrice === 0;
  }

  // isAnyAmacChildNonZero(selectedProductSessions: PmsSalesForecastReportDto[]): boolean {
  //   return selectedProductSessions.some(session => session.maxChildAge === null || session.maxChildAge === 0);
  // }
  ngOnInit() {
    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {
      // Handle the event in the header component
      this.updateHeader(newCookieValue);
    });
    //this.showSlides(this.slideIndex);



  }


  continue(): void {
    const data = this.selectedProductData;
    // const selectedSession = data?.sessions.find(x => x.programDetailId === selectedSession);
    data?.sessions.filter(x => x.programDetailId === this.selectedSeance)
    const dialog = this._dialog.open(EventDetailsBasketComponent, {
      disableClose: false,
      data: data
    }).afterClosed().subscribe((err) => {
      if (err.status) {
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
    });
  }
  addBasket(): void {

    if (this.petitRoute) {
      const programEndDate = this.selectedProductData?.programEndDate ? new Date(this.selectedProductData.programEndDate) : new Date();

      const month = (programEndDate.getMonth() + 1).toString().padStart(2, '0');
      const year = programEndDate.getFullYear().toString();

      const activityMonthYear = `${month}-${year}`;

      const blankUrl = "https://booking.lepetitchef.com/Antalya/" + activityMonthYear + "/2-pax";
      window.open(blankUrl, '_blank');
      return;
    }
    const routeLink = this.isNullOrEmpty(this.selectedProductData?.routeLink) ? null : this.selectedProductData?.routeLink;

    if (this.saleClosed && routeLink) {
      // const routeLink = this.isNullOrEmpty(this.selectedProductData?.routeLink) ? null : this.selectedProductData?.routeLink;
      window.open(routeLink, '_blank');
      return;
    }
    //const data = this.selectedProductData;
    //data?.sessions.filter(x => x.programDetailId === this.selectedSeance)


    if (!this.selectedSeance) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.picksession'),
        '',
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
      setTimeout(() => {
        Swal.close();
      }, 1000);
      return;
    }


    if (!this.selectedCategory) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.pickcategory'),
        '',
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
      setTimeout(() => {
        Swal.close();
      }, 1000);
      return;
    }

    const filterArea: string = this.selectedCategory?.toString() ?? '';
    const selectedEvent = this.categoriesFiltered.find(x => x.programDetailId && x.programDetailId === filterArea) ?? null;

    if (!selectedEvent) {
      return;
    }

    const cookie = this._cookieService.getCookie('basketEvents');
    const rmeinder = ((selectedEvent.capacityWeb ?? 0) - (selectedEvent.sold ?? 0)) ?? 0;
    this.extraServices?.forEach(program => {
      program.count = 0;
    });

    const model = [{
      category: selectedEvent.detailRemark,
      sessionId: selectedEvent.productId,
      itemRecId: selectedEvent.programDetailId,
      image: this.image,
      date: this.selectedProductData?.programEndDate,
      sessionTime: this.selectedSeance,
      childPrice: selectedEvent.currChildPrice,
      adultPrice: selectedEvent.currAdultPrice,
      adultCount: selectedEvent.calculateType === 1 ? selectedEvent.minPax : this.adultCount,
      childCount: this.childCount,
      title: selectedEvent.remark,
      totalPrice: this.totalPrice,
      remark: selectedEvent.remark,
      extraServices: [],
      propertyId: this.selectedProductData?.propertyId,
      maxPax: selectedEvent.maxPax,
      minPax: selectedEvent.minPax,
      calculateType: selectedEvent.calculateType,
      childCheck: this.nonChildCheck,
      maxChildAge: selectedEvent.maxChildAge ?? 18,
      minChildAge: selectedEvent.minChildAge,
      unitPrice: selectedEvent.currUnitPrice,
      reminder: rmeinder,
      isMaleControl: selectedEvent.ismalecontrol,
      freeFemaleCustomer: selectedEvent.freeFemaleCustomer,
      avaliableExtras: this.extraServices,
      addedDate: new Date()
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

  updateHeader(newCookieValue: string): void {
    // Your logic to update the header

    console.log('Header updated with new cookie value:', JSON.stringify(newCookieValue));
  }

  selectSeance(): void {

    //console.log('Selected Seance:', this.selectedSeance);
    if (this.selectedSeance && this.selectedProductData) {
      this.categoriesFiltered = this.selectedProductData.sessions
        .filter(session => session.onAir === true)
        .filter(x => x.isActive !== true)
        .filter(x => x.remainder > 0)
        .filter(session => session.seanceBegin === this.selectedSeance).sort((a, b) => {
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
        });

    }
    this.selectedCategory = undefined;
    this.getTotalPrice();

  }
  selectCategory(): void {

    let selected: PmsSalesForecastReportDto | null = new PmsSalesForecastReportDto();
    if (this.selectedCategory)
      selected = this.categoriesFiltered.find(x => x.programDetailId === this.selectedCategory) ?? null;
    if (selected) {
      this.nonChildCheck = this.isAnyAmacChildNonZero(selected);
      this.childCount = 0;
      this.adultCount = 1;

      if (selected.calculateType !== 0) {
        this.adultCount = selected.minPax ?? 1;
      }
      console.log('Selected Seance:', this.selectCategory);
      // You can perform further actions here based on the selected value
      this.getTotalPrice();
    }


  }


  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {

    let i: number;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }





  onChildCountChange(e: any, item: string): void {
    if (item === 'adult') {
      if (e === 0) {
        e = 1;
      }
      this.adultCount = e;
    } else if (item === 'child') {
      this.childCount = e;
    }
    if (this.selectedCategory) {
      const selectedEvent = this.categoriesFiltered.find(x => x.programDetailId && x.programDetailId === this.selectedCategory) ?? null;
      if (selectedEvent?.calculateType && selectedEvent?.calculateType === 1) {
        if (item === 'adult') {
          this.adultCount = selectedEvent.minPax ?? 1;
        } else if (item === 'child') {
          this.childCount = selectedEvent.minPax ?? 1;
        }
      }
    }
    this.getTotalPrice();
    this._cdr.detectChanges();
  }

  decrementValue(item: string): void {
    if (item === 'adult') {
      if (this.adultCount === 0) {
        return
      }
      this.adultCount -= 1;
    } else if (item === 'child') {
      if (this.childCount === 0) {
        return
      }
      this.childCount -= 1;
    }
    this._cdr.detectChanges();
    if (this.selectedSeance && this.selectedCategory) {
      const filterArea: string = this.selectedCategory?.toString() ?? '';
      const selectedEvent = this.categoriesFiltered.find(x => x.programDetailId && x.programDetailId === filterArea) ?? null;

      if (selectedEvent !== null) {
        if (selectedEvent.calculateType === 0) {
          if (selectedEvent.currAdultPrice !== selectedEvent.ticketPrice) {
            this.currPrice = ((selectedEvent.ticketPrice ?? 0) * this.adultCount) + ((selectedEvent?.childTicketPrice ?? 0) * this.childCount);
            this.currSymbol = selectedEvent.curr;
          } else {
            this.currPrice = undefined;
          }
          const adult = selectedEvent?.currAdultPrice ?? 0;
          const child = selectedEvent?.currChildPrice ?? 0;

          this.totalPrice = (adult * this.adultCount) + (child * this.childCount);
          return;
        } else {

          var totalpax = this.adultCount + this.childCount;
          var minPax = selectedEvent?.minPax ?? 1;

          if (totalpax < minPax) {
            if (item === 'adult') {
              this.adultCount += 1;
            } else if (item === 'child') {
              this.childCount += 1;
            }
          }

          this.totalPrice = (selectedEvent?.currUnitPrice ?? 1);
          return;
        }
      }
    }
    this.totalPrice = 0;
  }
  incrementValue(item: string): void {
    if (item === 'adult') {
      this.adultCount += 1;
    } else if (item === 'child') {
      this.childCount += 1;
    }
    this._cdr.detectChanges();
    if (this.selectedSeance && this.selectedCategory) {
      const filterArea: string = this.selectedCategory?.toString() ?? '';
      const selectedEvent = this.categoriesFiltered.find(x => x.programDetailId && x.programDetailId === filterArea) ?? null;

      if (selectedEvent !== null) {
        if (selectedEvent.calculateType === 0) {
          if (selectedEvent.currAdultPrice !== selectedEvent.ticketPrice) {
            this.currPrice = ((selectedEvent.ticketPrice ?? 0) * this.adultCount) + ((selectedEvent?.childTicketPrice ?? 0) * this.childCount);
            this.currSymbol = selectedEvent.curr;
          } else {
            this.currPrice = undefined;
          }
          const adult = selectedEvent?.currAdultPrice ?? 0;
          const child = selectedEvent?.currChildPrice ?? 0;

          this.totalPrice = (adult * this.adultCount) + (child * this.childCount);
          return;
        } else {

          var totalpax = this.adultCount + this.childCount;
          var maxPax = selectedEvent?.maxPax ?? 1;
          if (totalpax > maxPax) {
            if (item === 'adult') {
              this.adultCount -= 1;
            } else if (item === 'child') {
              this.childCount -= 1;
            }
          }

          this.totalPrice = (selectedEvent?.currUnitPrice ?? 1);
          return;
        }
      }
    }
    this.totalPrice = 0;
    // if (item === 'adult') {
    //   this.adultCount += 1;
    // } else if (item === 'child') {
    //   this.childCount += 1;
    // }
    // this.getTotalPriceForPax(item);
  }

  getTotalPrice(): void {
    if (this.selectedSeance && this.selectedCategory) {
      const filterArea: string = this.selectedCategory?.toString() ?? '';
      const selectedEvent = this.categoriesFiltered.find(x => x.programDetailId && x.programDetailId === filterArea) ?? null;
      console.log(selectedEvent)

      if (selectedEvent !== null) {
        if (selectedEvent.calculateType === 0) {
          if (selectedEvent.currAdultPrice !== selectedEvent.ticketPrice) {
            this.currPrice = ((selectedEvent.ticketPrice ?? 0) * this.adultCount) + ((selectedEvent?.childTicketPrice ?? 0) * this.childCount);
            this.currSymbol = selectedEvent.curr;
          } else {
            this.currPrice = undefined;
          }
          const adult = selectedEvent?.currAdultPrice ?? 0;
          const child = selectedEvent?.currChildPrice ?? 0;

          this.totalPrice = (adult * this.adultCount) + (child * this.childCount);
          return;
        } else {

          this.totalPrice = (selectedEvent?.currUnitPrice ?? 1);
          return;
        }
      }
    }
    this.totalPrice = 0;
  }



  isNullOrEmpty(value?: string): boolean {
    if (value === undefined || value === null || value === '') {
      return true;
    }
    return false;
  }


  translate(key: string): any {
    return this._translocoService.translate(key);
  }

  setJsonValuesWithLangCode(facthseetData: any, langcode: string): void {
    if (langcode) {
      if (facthseetData?.nameList?.length > 0) {
        facthseetData.name = facthseetData.nameList.find((i: { shortName: string; }) => i.shortName === langcode)?.value ?? ('No Translation For ' + langcode);
      }
    }
  }
}
