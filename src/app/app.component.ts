import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LoadingService } from './common/loader/loading.service';
import { delay } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TicketFactSheetDto } from './core/models/localStorage/TicketFactSheetDto';
import { GlobalService } from './core/services/global/global.service';
import { JsonDto } from './core/models/common/JsonDto';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'VeboniTicketSale';
  loading: boolean = false;
  companyFactSheetDef?: TicketFactSheetDto;
  nameList: JsonDto[] = [];
  langCode: string = "tr";
  langCodes: string[] = [];
  constructor(
    // private _translocoService: TranslocoService,
    private _loading: LoadingService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _titleService: Title) {
    // this._translocoService.setActiveLang('tr');
    //  
    // if (isPlatformBrowser(this.platformId)) {
    //   if (localStorage.getItem("companyFactSheetDef")) {
    //     this.companyFactSheetDef = JSON.parse(localStorage.getItem("companyFactSheetDef") ?? "") as CompanyFactSheetDefDto;
    //   }
    // }



    if (localStorage.getItem("companyFactSheetDef")) {
      this.companyFactSheetDef = JSON.parse(localStorage.getItem("companyFactSheetDef") ?? "") as TicketFactSheetDto;
      // if (this.companyFactSheetDef?.countryCode && this.companyFactSheetDef?.countryCode != '-') {
      //   this._translocoService.setActiveLang(this.companyFactSheetDef.countryCode.toLowerCase());
      // } else {
      //   this._translocoService.setActiveLang('tr');
      // }


      // this.companyFactSheetDef.themeColor = '#d9eff4';
      // this.companyFactSheetDef.themeBackgroundColor = '#d9eff4';

      // this.companyFactSheetDef.headerThemeColor = '#ffffff';
      // this.companyFactSheetDef.headerThemeBackgroundColor = '#ffffff';

      // this.companyFactSheetDef.themeFontColor = '#000000';


      // // this.companyFactSheetDef.componentBackGround = '#ffffff';





      // this.companyFactSheetDef.buttonBackgroundColor = '#ffffff';


      // this.companyFactSheetDef.subpageBackgroundColor = '#050619';
      // this.companyFactSheetDef.eventDetBackgroundColor = '#28273b';


      // this.companyFactSheetDef.eventDetFontColor = '#3c3a41';


      // this.companyFactSheetDef.eventItemBackgroundColor = '#3c3a41';

      // this.companyFactSheetDef.buttonBorderColor = '#3c3a41';


      // this.companyFactSheetDef.ticketItemBackground = '#ffffff';

      // this.companyFactSheetDef.ticketItemColor = '#d9eff4';


      // this.companyFactSheetDef.themeBackGroundImage = ' ./assets/background/ay.png';


      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.themeColor)) {
        document.documentElement.style.setProperty('--theme-color', this.companyFactSheetDef.themeColor ?? '');
      }
      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.backgroundColor)) {
        document.documentElement.style.setProperty('--theme-background-color', this.companyFactSheetDef.backgroundColor ?? '');

        const themeFontColor = this.companyFactSheetDef?.backgroundColor ?? ''

        const grayishColor = this.makeColorGrayish(themeFontColor, 0.2);

        document.documentElement.style.setProperty('--theme-background-color-gray', grayishColor);
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.headerColor)) {
        document.documentElement.style.setProperty('--header-theme-color', this.companyFactSheetDef.headerColor ?? '');


        const themeFontColor = this.companyFactSheetDef?.headerColor ?? ''

        const transparentColor = this.hexToRgba(themeFontColor, 0.5);

        document.documentElement.style.setProperty('--header-theme-color-transparent', transparentColor);
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.headerBackgroundColor)) {
        document.documentElement.style.setProperty('--header-theme-background-color', this.companyFactSheetDef.headerBackgroundColor ?? '');

        const themeFontColor = this.companyFactSheetDef?.headerBackgroundColor ?? ''

        const grayishColor = this.makeColorGrayish(themeFontColor, 0.3);

        document.documentElement.style.setProperty('--header-theme-background-color-gray', grayishColor);

      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.fontColor)) {
        document.documentElement.style.setProperty('--theme-font-color', this.companyFactSheetDef.fontColor ?? '');

        const themeFontColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--theme-font-color')
          .trim();

        const transparentColor = this.hexToRgba(themeFontColor, 0.54);

        document.documentElement.style.setProperty('--theme-font-color-transparent', transparentColor);
      }

      // if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.componentBackGround)) {
      //   document.documentElement.style.setProperty('--component-background-color', this.companyFactSheetDef.componentBackGround);
      // }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.ticketItemBackgroundColor)) {
        document.documentElement.style.setProperty('--ticket-item-background', this.companyFactSheetDef.ticketItemBackgroundColor ?? '');
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.ticketItemColor)) {
        document.documentElement.style.setProperty('--ticket-item-color', this.companyFactSheetDef.ticketItemColor ?? '');
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.buttonBackgroundColor)) {
        document.documentElement.style.setProperty('--button-background-color', this.companyFactSheetDef.buttonBackgroundColor ?? '');
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.subPageBackgroundColor)) {
        document.documentElement.style.setProperty('--subpage-background-color', this.companyFactSheetDef.subPageBackgroundColor ?? '');
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.eventDetBackgroundColor)) {
        document.documentElement.style.setProperty('--eventdetail-background-color', this.companyFactSheetDef.eventDetBackgroundColor ?? '');
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.eventDetFontColor)) {
        document.documentElement.style.setProperty('--eventdetail-font-color', this.companyFactSheetDef.eventDetFontColor ?? '');
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.eventItemBackgroundColor)) {
        document.documentElement.style.setProperty('--eventitem-background-color', this.companyFactSheetDef.eventItemBackgroundColor ?? '');
      }

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.buttonBorderColor)) {
        document.documentElement.style.setProperty(' --button-border-color', this.companyFactSheetDef.buttonBorderColor ?? '');

        const themeFontColor = this.companyFactSheetDef?.buttonBorderColor ?? ''

        const transparentColor = this.makeColorGrayish(themeFontColor, 0.54);

        document.documentElement.style.setProperty('--button-border-color-gray', transparentColor);
      }


      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.themeBackgroundImage)) {
        // document.documentElement.style.setProperty('--theme-background-image', this.companyFactSheetDef.themeBackGroundImage);
        document.documentElement.style.setProperty('--theme-background-image', `url(${this.companyFactSheetDef.themeBackgroundImage})`);
      }


    }

    if (this.companyFactSheetDef?.companyFaviconUrl) {
      this.setFavicon(this.companyFactSheetDef.companyFaviconUrl);
    }

    if (this.companyFactSheetDef?.name) {
      this.setTitleName(this.companyFactSheetDef.name);
    }

  }

  makeColorGrayish(hexColor: string, intensity: number = 0.2): string {
    if (!hexColor.startsWith("#")) return hexColor;

    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);

    r = Math.round(r * (1 - intensity) + 200 * intensity);
    g = Math.round(g * (1 - intensity) + 200 * intensity);
    b = Math.round(b * (1 - intensity) + 200 * intensity);

    return `rgb(${r}, ${g}, ${b})`;
  }


  hexToRgba(hex: string, alpha: number): string {
    hex = hex.replace(/^#/, "");

    if (hex.length === 3) {
      hex = hex.split("").map(char => char + char).join("");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }



  setTitleName(names: string) {

    this.nameList = JSON.parse(names) as JsonDto[];

    this.title = this.nameList.find(x => x.shortName === this.langCode)?.value ?? this.title;

    for (const item of this.nameList) {
      this.langCodes.push(item?.shortName ?? '');
    }

    this._titleService.setTitle(this.title);
  }

  setFavicon(url: string) {

    let favIcon: HTMLLinkElement = document.querySelector('#favIcon') ?? new HTMLLinkElement;
    favIcon.href = url;
  }

  async ngOnInit(): Promise<void> {
    // //Google Tag Manager
    // var gtmScript = document.createElement('script');
    // gtmScript.innerHTML =
    //   " (function (w, d, s, l, i) {" +
    //   " w[l] = w[l] || []; w[l].push({" +
    //   "'gtm.start':" +
    //   " new Date().getTime(), event: 'gtm.js'" +
    //   " }); var f = d.getElementsByTagName(s)[0]," +
    //   " j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =" +
    //   "'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);" +
    //   " })(window, document, 'script', 'dataLayer', " + "'" +
    //   //onlineMarketing.trafficIdentity 
    //   'GTM-PGRQDST'
    //   + "'" + ");";
    // document.getElementsByTagName('head')[0].appendChild(gtmScript);


    // //Google Tag Manager (noscript)
    // var gtmNoScript = document.createElement('noscript');
    // gtmNoScript.innerHTML = "<iframe src=" + '"' + "https://www.googletagmanager.com/ns.html?id=" + 'GTM-PGRQDST' + '"' + " height=" + '"0"' + " width=" + '"0"' +
    //   " style=" + '"display:none;visibility:hidden"></iframe>"';
    // document.body.appendChild(gtmNoScript);


    //End Google Tag Manager (noscript)

    // this._translocoService.langChanges$.subscribe((res) => {
    //   this.languageChanged();
    // });
    this.listenToLoading();

  }

  //   if (this._translocoService.getActiveLang() == 'tr') {
  //     // this.message = "Bu web sitesi deneyiminizi en iyi şekilde yaşamanız için çerezleri kullanır."
  //     // this.details = "Çerez politikamız hakkında detaylı bilgi sahibi olmak için tıklayınız."
  //     // this.button = "Kabul Et!"
  //   }
  // }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
