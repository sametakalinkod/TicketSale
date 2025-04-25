import { Component, ElementRef, Inject, LOCALE_ID, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, Subject, find, interval, map, takeUntil } from 'rxjs'
import { SliderAnimatedDirective } from '../common/directives-pipes/slider-animated.directive'
import { FormBuilder, FormGroup } from '@angular/forms'
import { PmsSalesForecastReportDto } from 'src/app/common/models/PmsSalesForecastReportDto'
import { ProgramBaseDto } from 'src/app/common/models/ProgramBaseDto'
import { ActionResponse } from 'src/app/core/models/ActionResponse'
import { GroupProductsListBySession } from 'src/app/core/services/products/GroupProductsListBySession'
import { ProductsService } from 'src/app/core/services/products/Products.service'
import { MatDatepickerIntl } from '@angular/material/datepicker'
import { formatDate, registerLocaleData } from '@angular/common'
import { TranslocoService } from '@ngneat/transloco'
import { LocaleService } from 'src/app/core/services/common/Locale.service'
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum'
import { GlobalService } from 'src/app/core/services/global/global.service'
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto'
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter'
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'
import { CookieService } from 'src/app/core/services/global/cookie.service'
import { TicketFactSheetDto } from 'src/app/core/models/localStorage/TicketFactSheetDto'

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD/MMM YYYY',
    dateA11yLabel: 'LL'
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useFactory: (translocoService: TranslocoService) => translocoService.getActiveLang(), deps: [TranslocoService] },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
  // ,
  // providers: [{ provide: LOCALE_ID, useValue: 'tr' }]

  // providers: [
  //   // The locale would typically be provided on the root module of your application. We do it at
  //   // the component level here, due to limitations of our example generation script.
  //   { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },

  //   // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
  //   // to your app config. We provide it at the component level here, due to limitations
  //   // of our example generation script.
  //   // provideMomentDateAdapter(),
  // ],
  // standalone: true,
})
export class HomeComponent implements OnInit {
  @ViewChild(SliderAnimatedDirective) sliderDirective!: SliderAnimatedDirective
  @ViewChildren(SliderAnimatedDirective) sliderDirectives!: QueryList<SliderAnimatedDirective>

  private destroy$: Subject<void> = new Subject<void>()

  // @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  @ViewChild('cosmosDance_video_player') videoPlayer: ElementRef | undefined
  pauseMainPageVid: boolean = true
  videoMuted: boolean = true

  //loop static
  staticCount = 20
  slidesEx: any

  salesforecastreport: PmsSalesForecastReportDto[] = []
  productsListByDate: GroupProductsListBySession[] = []

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' }
  ]
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 }
  index = 0
  activeProducts: ProgramBaseDto[] = []
  activeProductsForEvents: ProgramBaseDto[] = []
  activeProductsCopy: ProgramBaseDto[] = []
  activeProductsSlider: ProgramBaseDto[] = [
    // {
    //   remark: 'AQUATA FAMILY SHOW',
    //   imageList: [
    //     'https://veboni.blob.core.windows.net/0046654f-544b-4092-8eae-af488031cb9b/pms%5Cjpeg%5C9a7d40e3-50ef-417f-bcc6-7b340ee4d144.jpeg'
    //   ],
    //   programId: '5cf9bae2-9afb-418d-90f6-f14fdb326c48'
    // },
    // {
    //   remark: 'AQUATA FAMILY SHOW',
    //   imageList: [

    //   ],
    //   programId: '5cf9bae2-9afb-418d-90f6-f14fdb326c48'
    // },
    // {
    //   remark: 'CABARET SHOW',
    //   imageList: [
    //     'https://veboni.blob.core.windows.net/0046654f-544b-4092-8eae-af488031cb9b/pms%5Cjpeg%5C6fb5d3dc-73d2-4ebf-a10b-e3987506f124.jpeg'
    //   ],
    //   programId: '69c5d624-f38d-40dc-8c30-13e986be04ad'
    // },
    // {
    //   remark: 'KIVANC & BURAK GRAVITY SHOW',
    //   imageList: [
    //     'https://veboni.blob.core.windows.net/0046654f-544b-4092-8eae-af488031cb9b/pms%5Cjpeg%5C33eacf39-f850-466e-b654-e9b03642fd62.jpeg'
    //   ],
    //   programId: 'e17128f0-157a-4aef-8881-72d033cbf8dc'
    // },
    {
      remark: 'Le Petit Chef',
      imageList: [
        'https://veboni.blob.core.windows.net/0046654f-544b-4092-8eae-af488031cb9b/pms%5Cjpeg%5C3a3bc420-263a-42a0-b73e-2b1703e52c6a.jpeg'
      ],
      programId: 'cf8c02cf-635f-4b95-9ab3-10830eab01bf'
    },
    // {
    //   remark: 'Küçük Prens',
    //   imageList: [
    //     'https://veboni.blob.core.windows.net/0046654f-544b-4092-8eae-af488031cb9b/pms%5Cjpeg%5C4709a5be-cfe3-4bad-ba87-1dd93c7a1a85.jpeg'
    //   ],
    //   programId: ''
    // }
  ]
  activeProductsSliderCopy: ProgramBaseDto[] = [];
  selectedEventSlider: boolean = false;
  productSearchForm!: FormGroup
  minDate: Date = new Date()
  // minDate + 1 year
  maxDate: Date = new Date(this.minDate.getTime() + 86400000 * 365)
  checkOutDate!: Date
  language?: string
  scrollToEvent: boolean = false
  activityType: number[] | null = null

  companyFactSheetDef?: TicketFactSheetDto;



  sliderImageList: string[] = [];
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  constructor(
    private _intl: MatDatepickerIntl,
    private _adapter: DateAdapter<any>,
    private _router: Router,
    private _productService: ProductsService,
    private _formBuilder: FormBuilder,
    private _translocoService: TranslocoService,
    private _localeService: LocaleService,
    private _renderer: Renderer2,
    private _cookieService: CookieService,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    // this.checkOutDate = new Date(this.minDate.getTime() + 86400000);
    this.checkOutDate = new Date(this.minDate)
    this.checkOutDate.setMonth(this.checkOutDate.getMonth() + 1)
    this._translocoService.langChanges$.subscribe((lang) => {
      this._adapter.setLocale(lang);
    });

    if (localStorage.getItem("companyFactSheetDef")) {

      this.companyFactSheetDef = JSON.parse(localStorage.getItem("companyFactSheetDef") ?? "") as TicketFactSheetDto;

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.imagesList)) {
        this.sliderImageList = JSON.parse(this.companyFactSheetDef?.imagesList ?? '');
      }
    }
  }

  slideChange(swiperRef: any) {
    this.index = swiperRef.detail[0].activeIndex

  }
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1
  }

  slickInit(e: any) {
    console.log('slick initialized')
  }

  breakpoint(e: any) {
    console.log('breakpoint')
  }

  afterChange(e: any) {
    console.log('afterChange')
  }

  beforeChange(e: any) {
    console.log('beforeChange')
  }

  ngOnInit() {
    let basketItems = [];
    const basketValue = this._cookieService.getCookie('basketEvents')
    if (basketValue && JSON.parse(basketValue)) {
      basketItems = JSON.parse(basketValue);
      const today = new Date();

      basketItems = basketItems.filter((element: { addedDate: any }) => {
        if (element.addedDate) {
          const addedDate = new Date(element.addedDate);
          const diffTime = Math.abs(today.getTime() - addedDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 1;
        }
        return true;
      });

      this._cookieService.setCookie('basketEvents', JSON.stringify(basketItems), 7);

    }


    const language = this._translocoService.getActiveLang()
    if (this.language !== language) {
      this.language = language
      this._localeService.setLocale(language)
      const item = this._localeService.getLocale()
    }

    this.productSearchForm = this._formBuilder.group({
      start: [this.minDate],
      end: [this.checkOutDate],
      product: []
    })
    // $(document).ready(() => {
    //   $('.js-slick01').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   });
    // });

    interval(7000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.triggerAnimation()
      })

    this.getActiveEvents()
    const routerItem = localStorage.getItem('routerpurp')

    if (!routerItem) {
      this.searchEvents()
    }

    //cihaz kontrol
    const isMobile = this.detectMobileDevice();
    console.log('Is mobile:', isMobile);
    //this.getProductsAndSessions();
  }
  detectMobileDevice(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android|iPad|iPhone|iPod/i.test(userAgent);
  }

  triggerAnimation() {

    const activeDirective = this.sliderDirectives.find(directive => directive.hasActiveClass())
    if (activeDirective) {
      const nextIndex = activeDirective.getNextIndex()
      if (nextIndex !== null) {
        const nextDirective = this.sliderDirectives.toArray()[nextIndex]
        if (nextDirective) {
          nextDirective.onClick()
        }
      }
    }
  }

  // getProductsAndSessions(): Observable<GroupProductsListBySession[]> {
  //   const model = {
  //     beginDate: new Date(),
  //     produceType: 3
  //   };

  //   return this._productService.getPmsSalesForecastReport(model).pipe(
  //     map(response => {
  //       const salesForecastReport = response.data;

  //       return this.generateProductsListByDate(salesForecastReport);
  //     })
  //   );
  // }

  private generateProductsListByDate(salesForecastReport: any[]): GroupProductsListBySession[] {
    return salesForecastReport
      .map(item => {
        const { date, productId, ...rest } = item
        const dateString = date?.toString().split('T')[0] // Convert Date to string
        return {
          date,
          productId,
          child: [rest] // Push the current item to the child array
        }
      })
      .reduce((accumulator: GroupProductsListBySession[], currentValue) => {
        const key = `${currentValue.date}-${currentValue.productId}`
        const existingItem = accumulator.find(item => `${item.date}-${item.productId}` === key)
        if (existingItem) {
          existingItem.child.push(...currentValue.child)
        } else {
          accumulator.push(currentValue)
        }
        return accumulator
      }, [])
  }
  isNullOrEmpty(value: any): boolean {
    if (value === undefined || value === null || value === '') {
      return true
    }
    return false
  }

  getProductsAndSessions(): void {
    const model = {
      //produceId: item.recId,
      beginDate: new Date(),
      produceType: [3],
      activityType: null
      //endDate: this.reservationInfo.checkoutdate
    }
    this._productService.getPmsSalesForecastReport(model).subscribe({
      next: (response: ActionResponse<any>) => {
        this.salesforecastreport = response.data;

        this.salesforecastreport.forEach((element) => {

          // element.produceNameDisplay = this.parseOrDefault(element.produceName, this.langCode, element.produceName);
        });
        this.productsListByDate = this.salesforecastreport
          .map(item => {
            const { date, productId, ...rest } = item
            const dateString = date?.toString().split('T')[0] // Convert Date to string
            return {
              date,
              productId,
              child: [rest] // Push the current item to the child array
            }
          })
          .reduce((accumulator: GroupProductsListBySession[], currentValue) => {
            const key = `${currentValue.date}-${currentValue.productId}`
            const existingItem = accumulator.find(item => `${item.date}-${item.productId}` === key)
            if (existingItem) {
              existingItem.child.push(...currentValue.child)
            } else {
              accumulator.push(currentValue)
            }
            return accumulator
          }, [])

      },
      error: error => {
        console.error('Error:', error)
      },
      complete: () => { }
    })
  }

  getActiveEvents(): void {
    this.companyFactSheetDef

    const model = {
      beginDate: new Date(),
      produceType: [3],
      propertyId: '3efb1758-ccd9-42a4-9bf6-a85710338700',
      activityType: this.activityType
    }
    this._productService.getActiveEvents(model).subscribe({
      next: (response: ActionResponse<any>) => {
        this.activeProducts = response.data;
        this.activeProducts.forEach((element) => {
          element.remarkDisplay = this.parseOrDefault(element.remark, this.language, element.remark);
          element.remarkEnRouting = this.parseOrDefault(element.remark, 'en', element.remark);
        });
        // make all items in dropdown uppercase
        this.activeProductsForEvents = this.activeProducts.map(item => {
          return {
            ...item,
            remark: item.remark?.toUpperCase()
          }
        })
        const routerItem = localStorage.getItem('routerpurp')

        if (routerItem) {

          let checkItem = ''
          switch (routerItem) {
            case 'club-cosmos':
              checkItem = 'club cosmos'
              break
            default:
              checkItem = routerItem
              break
          }

          checkItem = checkItem.replace(/-/g, ' ')

          if (!this.isNullOrEmpty(checkItem)) {
            if (checkItem === 'the sin' || checkItem === 'club cosmos') {
              this.activityType = [6]
              this.checkOutDate = new Date(this.minDate)
              this.checkOutDate.setMonth(this.checkOutDate.getMonth() + 6)
              this.searchEvents()
              this.scrollToEvent = true
            }
            // const item = this.activeProducts.find(x => x.remark?.toLocaleLowerCase().replace('ğ', ' ') === checkItem)
            const item = this.activeProducts.find(x => {
              const transformedRemark = x.remarkEnRouting
                ?.toLocaleLowerCase()
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ç/g, 'c')
                .replace(/ö/g, 'o')
                .replace(/ı/g, 'i')
              console.log('event', transformedRemark)
              // console.log('check', checkItem);
              return transformedRemark === checkItem
            })
            if (item) {
              if (checkItem === 'club cosmos') {
                this.activityType = [6]
              } else {
                this.activityType = null
                this.productSearchForm.get('product')?.setValue(item)
              }

              this.checkOutDate = new Date(this.minDate)
              this.checkOutDate.setMonth(this.checkOutDate.getMonth() + 6)
              this.productSearchForm.get('start')?.setValue(this.minDate)
              this.productSearchForm.get('end')?.setValue(this.checkOutDate)

              this.searchEvents()
              this.scrollToEvent = true
            }
          }
        }
        this.activeProductsCopy = this.activeProducts.slice(0, 7)
        // this.activeProductsSlider = this.activeProductsCopy;
        // this.activeProductsSlider = [
        //   { remark: 'AQUATA FAMILY SHOW', imageList: ['https://veboni.blob.core.windows.net/5b2ea46d-e4d1-412b-a5ea-ddb2836ac5f0/pms/jpeg/bd4c0d4b-3c37-4ae3-88f7-7cbe8f9aa688.jpeg'] },
        //   { remark: 'CABARET SHOW', imageList: ['https://veboni.blob.core.windows.net/5b2ea46d-e4d1-412b-a5ea-ddb2836ac5f0/pms/jpeg/2aa630ae-11c9-4a9a-86f3-7e80b6e4baa3.jpeg'] },
        //   { remark: 'GRAVITY SHOW', imageList: ['https://veboni.blob.core.windows.net/5b2ea46d-e4d1-412b-a5ea-ddb2836ac5f0/pms/jpeg/98e9780b-2fc7-4fc1-8953-cfe232853282.jpeg'] }];


        //   if (this.activeProducts[0] !== undefined && this.activeProducts[0].imageList !== undefined) {
        //     this.activeProducts[0].imageList = [];
        // }
        this.activeProductsSlider.forEach(element => {
          const findItem = this.activeProducts.find(x => x.programId === element.programId);
          if (findItem) {
            element.programDate = findItem.programDate;
            element.programId = findItem.programId;
            element.remark = findItem.remarkDisplay;
            if ((element.imageList?.length ?? 0) <= 0) {
              element.imageList = findItem.imageList;
            }
          } else {
            const filtered = this.activeProducts.filter(x => !this.activeProductsSlider.some(y => y.programId === x.programId));
            const today = new Date().getTime();

            if (filtered.length > 0) {
              const closestItem = filtered.reduce((closest, current) => {
                const closestDate = new Date(closest.programDate ?? 0).getTime();
                const currentDate = new Date(current.programDate ?? 0).getTime();
                const closestDiff = Math.abs(closestDate - today);
                const currentDiff = Math.abs(currentDate - today);
                return currentDiff < closestDiff ? current : closest;
              });

              element.programDate = closestItem.programDate;
              element.programId = closestItem.programId;
              element.remark = closestItem.remarkDisplay;
              element.imageList = closestItem.imageList;

            }
          }

        })

        this.activeProductsSlider.sort((a, b) => {
          if (a.programDate === undefined) return 1
          if (b.programDate === undefined) return -1
          const dateA = new Date(a.programDate)
          const dateB = new Date(b.programDate)

          // Compare the two dates
          return dateA.getTime() - dateB.getTime()
        })

        this.activeProductsSliderCopy = this.activeProductsSlider;

        // If the number of items is less than 5, repeat the items until you have 5 items
        // while (this.activeProductsSlider.length < 5) {
        //   const remainingItems = 5 - this.activeProductsSlider.length;
        //   const itemsToAdd = this.activeProducts.slice(0, remainingItems);
        //   this.activeProductsSlider = this.activeProductsSlider.concat(itemsToAdd);
        // }

        //this.salesforecastreport = response.data;

        this.productsListByDate = this.activeProducts.map(product => {
          return {
            date: product.programDate,
            productId: product.programId,
            child: [
              {
                imageList: product.imageList,
                remark: product.remark,
                remarkDisplay: product.remarkDisplay,
                programDetailId: product.programDetailId
              }
            ]
          }
        })

        this.productsListByDate.sort((a, b) => {
          if (a.date === undefined) return 1
          if (b.date === undefined) return -1
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)

          // Compare the two dates
          return dateA.getTime() - dateB.getTime()
        })

        this.activeProducts.sort((a, b) => {
          if (a.programDate === undefined) return 1
          if (b.programDate === undefined) return -1
          const dateA = new Date(a.programDate)
          const dateB = new Date(b.programDate)

          // Compare the two dates
          return dateA.getTime() - dateB.getTime()
        })

        // this.activeProductsSlider = this.activeProducts.slice(0, 7);

        // this.productsListByDate = this.salesforecastreport.map((item) => {
        //   const { date, productId, ...rest } = item;
        //   const dateString = date?.toString().split('T')[0]; // Convert Date to string
        //   return {
        //     date,
        //     productId,
        //     child: [rest] // Push the current item to the child array
        //   };
        // }).reduce((accumulator: GroupProductsListBySession[], currentValue) => {
        //   const key = `${currentValue.date}-${currentValue.productId}`;
        //   const existingItem = accumulator.find(item => `${item.date}-${item.productId}` === key);
        //   if (existingItem) {
        //     existingItem.child.push(...currentValue.child);
        //   } else {
        //     accumulator.push(currentValue);
        //   }
        //   return accumulator;
        // }, []);
      },
      error: error => {
        console.error('Error:', error)
      },
      complete: () => { }
    })
  }

  // getActiveEvents(): Observable<any[]> {
  //
  //   // Define your model
  //   const model = {
  //     beginDate: new Date(),
  //     produceType: 3
  //   };

  //   // Call ProductService to get active events
  //   return this._productService.getActiveEvents(model).pipe(
  //     map(response => {
  //       // Process the response data as needed
  //       this.activeProducts = response.data;
  //       this.activeProductsSlider = this.generateSlider(this.activeProducts);
  //       return this.activeProductsSlider;
  //     })
  //   );
  // }

  // Method to generate slider based on active products
  private generateSlider(activeProducts: any[]): any[] {
    let activeProductsSlider = activeProducts.slice(0, 5)

    // If the number of items is less than 5, repeat the items until you have 5 items
    while (activeProductsSlider.length < 5) {
      const remainingItems = 5 - activeProductsSlider.length
      const itemsToAdd = activeProducts.slice(0, remainingItems)
      activeProductsSlider = activeProductsSlider.concat(itemsToAdd)
    }

    return activeProductsSlider
  }

  handleClick(): void {
    this.videoMuted = !this.videoMuted
  }

  onHoverMethod(value: boolean): void {
    this.pauseMainPageVid = value
    console.log('Hovered!')
    var dance_video = document.getElementById('cosmosDance_video_player') as HTMLVideoElement

    if (dance_video && value) {
      dance_video.play()
    } else if (dance_video) {
      dance_video.pause()
    }
  }

  openSelectedEventDetails(selectedEvent?: string, date?: any): void {
    if (selectedEvent) {
      const value = selectedEvent + 'date' + formatDate(date, 'yyyy-MM-dd', 'en-US')

      const encodedGuid = btoa(value)
      const url = this._router.serializeUrl(this._router.createUrlTree([`/eventdetails/${encodedGuid}`]))
      //open different page
      // window.open(url, '_blank');
      window.location.href = url
    }
  }

  onClickLeft() { }

  onClickRight() { }

  dateRangeChange() {
    let startDate = new Date(this.productSearchForm.controls['start']?.value)
    let endDate = new Date(this.productSearchForm.controls['end']?.value)
    if (!(endDate <= startDate)) {
      // var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      // var numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      // this.productSearchForm.controls["stayDate"]?.setValue(numberOfNights);
    }
  }

  filterChanged(changeEvent: any): void {
    if (changeEvent?.target?.value === '') {
      this.activeProductsForEvents = this.activeProducts
      return
    }
    this.activeProductsForEvents = this.activeProducts.filter(item => {
      return item.remark?.toLowerCase().includes(changeEvent?.target?.value)
    })
  }

  filterEmpty(): void {
    this.activeProductsForEvents = this.activeProducts
    this.productSearchForm.get('product')?.setValue("")
  }

  searchEvents(): void {
    const model = {
      produceId:
        this.productSearchForm.controls['product']?.value && this.productSearchForm.controls['product']?.value != ''
          ? this.productSearchForm.controls['product']?.value.programId
          : null,
      beginDate: new Date(this.productSearchForm.controls['start']?.value),
      produceType: [3],
      activityType: this.activityType,
      endDate: new Date(this.productSearchForm.controls['end']?.value),
      isPublish: true,
      propertyId: this.companyFactSheetDef?.companyId ?? '3efb1758-ccd9-42a4-9bf6-a85710338700'
    }

    this._productService.getPmsSalesForecastReport(model).subscribe({
      next: (response: ActionResponse<any>) => {
        if (this.activeProductsSliderCopy.length > 0) {
          this.selectedEventSlider = false;
          this.activeProductsSlider = this.activeProductsSliderCopy;
          setTimeout(() => {
            const nextDirective = this.sliderDirectives.toArray()[0];
            this._renderer.addClass(nextDirective._el.nativeElement, 'active');
            if (nextDirective) {
              nextDirective.onClick()
            }
          }, 1000);
        }
        this.activityType = null

        this.salesforecastreport = response.data;
        this.salesforecastreport.forEach((element) => {
          element.remarkDisplay = this.parseOrDefault(element.remark, this.language, element.remark);
        });


        this.productsListByDate = this.salesforecastreport
          .map(item => {
            const { date, productId, ...rest } = item
            const dateString = date?.toString().split('T')[0] // Convert Date to string

            return {
              date,
              productId,
              child: [rest as PmsSalesForecastReportDto] // Cast 'rest' to 'PmsSalesForecastReportDto'
            }
          })
          .reduce((accumulator: GroupProductsListBySession[], currentValue) => {
            const key = `${currentValue.date}-${currentValue.productId}`
            const existingItem = accumulator.find(item => `${item.date}-${item.productId}` === key)
            if (existingItem && currentValue.child) {
              existingItem.child.push(...currentValue.child)
            } else {
              accumulator.push(currentValue)
            }
            return accumulator
          }, [])
          .sort((a, b) => {
            const dateA = a.date ? new Date(a.date).getTime() : 0
            const dateB = b.date ? new Date(b.date).getTime() : 0
            return dateA - dateB
          })


        if (this.scrollToEvent) {
          const section = document.querySelector('.section-wrapper')

          if (section) {
            // section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const rect = section.getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const top = rect.top + scrollTop
            window.scroll({
              top: top,
              left: 0,
              behavior: 'smooth'
            })
          }
        }
        const routerItem = localStorage.getItem('routerpurp')

        if (routerItem) {
          const item = this.productsListByDate.slice(0, 5)

          this.selectedEventSlider = true;

          this.activeProductsSlider = item.map(product => {
            return {
              remark: product.remarkDisplay,
              imageList: product.child[0].imageList,
              programDate: product.date,
              programId: product.productId,
              programDetailId: product.child[0].programDetailId
            }
          })
          setTimeout(() => {
            const nextDirective = this.sliderDirectives.toArray()[0];
            this._renderer.addClass(nextDirective._el.nativeElement, 'active');
            if (nextDirective) {
              nextDirective.onClick()
            }
            localStorage.removeItem('routerpurp')
          }, 1000);

        }
      },
      error: error => {
        console.error('Error:', error)
      },
      complete: () => { }
    })
  }

  displayFn(program: ProgramBaseDto): string {
    return program && program.remarkDisplay ? program.remarkDisplay : ''
  }

  onProductChange(event: any): void {
    if (event?.option?.value) {
      this.productSearchForm.get('product')?.setValue(event.option.value)
    }
  }

  french() {
    this._locale = 'fr'
    this._adapter.setLocale(this._locale)
    this.updateCloseButtonLabel('Fermer le calendrier')
  }

  updateCloseButtonLabel(label: string) {
    this._intl.closeCalendarLabel = label
    this._intl.changes.next()
  }

  //F  <mat-hint>{{getDateFormatString()}}</mat-hint>
  getDateFormatString(): string {
    if (this._locale === 'ja-JP') {
      return 'YYYY/MM/DD'
    } else if (this._locale === 'fr') {
      return 'DD/MM/YYYY'
    }
    return ''
  }

  sliderClicked(item: any): void {
    let invalid = false
    if (item.programId) {
      const show = this.activeProductsSlider.find(x => x.programId === item.programId && x.programDate === item?.programDate)


      if (show) {
        if (this.selectedEventSlider && show.programDate) {
          const value = show.programDetailId + 'date' + formatDate(show.programDate, 'yyyy-MM-dd', 'en-US')

          const encodedGuid = btoa(value)
          const url = this._router.serializeUrl(this._router.createUrlTree([`/eventdetails/${encodedGuid}`]))
          //open different page
          // window.open(url, '_blank');
          window.location.href = url;
          return;
        }
        this.productSearchForm.get('product')?.setValue(show)

        this.checkOutDate = new Date(this.minDate)
        this.checkOutDate.setMonth(this.checkOutDate.getMonth() + 6)
        this.productSearchForm.get('start')?.setValue(this.minDate)
        this.productSearchForm.get('end')?.setValue(this.checkOutDate)

        this.searchEvents()
      } else {
        invalid = true
      }
    } else {
      invalid = true
    }

    if (invalid) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.error'),
        this.translate('activitynotfound'),
        SweetalertType.error
      )
      GlobalService.sweetAlert(sweetAlertDto)
    }
  }

  translate(key: string): any {
    return this._translocoService.translate(key)
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
