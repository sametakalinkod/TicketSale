import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { PrimeNGConfig } from 'primeng/api';
import { TicketFactSheetDto } from 'src/app/core/models/localStorage/TicketFactSheetDto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  videoMuted: boolean = true;
  basketItems: any[] = [];

  availableLangs: any[] = [];
  activeLang: string = '';
  isOptWrapperOpen = false;
  selectedOption: string = 'EN';
  companyFactSheetDef?: TicketFactSheetDto;

  constructor(private renderer: Renderer2,
    private primengConfig: PrimeNGConfig,
    private _router: Router,
    private _cookieService: CookieService,
    private _translocoService: TranslocoService
  ) {
    if (localStorage.getItem("companyFactSheetDef")) {
      this.companyFactSheetDef = JSON.parse(localStorage.getItem("companyFactSheetDef") ?? "") as TicketFactSheetDto;
      // this.companyFactSheetDef.propertyPhone = '444 90 30';

    }
  }


  ngAfterViewInit(): void {
  }

  setActiveLang(lang: string): void {
    //locale(lang);
    this._translocoService.setActiveLang(lang);

    this._translocoService.selectTranslateObject('primeng').subscribe((res) => {
      this.primengConfig.setTranslation(res);
      location.reload();
    });
  }

  toggleOptWrapper() {
    this.isOptWrapperOpen = !this.isOptWrapperOpen;
  }

  ngOnInit() {
    const storedLang = localStorage.getItem('activeLang');
    this.availableLangs = this._translocoService.getAvailableLangs();
    this.activeLang = storedLang ? storedLang : 'en';
    this.selectedOption = this.activeLang.toUpperCase();

    this.setActiveLanguage(this.activeLang);
    //  
    // // Subscribe to language changes
    // this._translocoService.langChanges$.subscribe((activeLang) => {
    //    
    //   this.selectedOption = activeLang.toUpperCase();
    //   this.activeLang = activeLang;
    //   this._translocoService.setDefaultLang(activeLang);
    //   localStorage.setItem('activeLang', activeLang);
    //   console.log('Lang .Navigation');
    // });
    this._translocoService
      .selectTranslateObject('primeng')
      .subscribe((res) => this.primengConfig.setTranslation(res));
    // Set the country iso codes for languages for flags

    this.updateHeader();

    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {
      // Handle the event in the header component
      this.updateHeader(newCookieValue);
    });
  }


  handleClick(): void {
    this.videoMuted = !this.videoMuted;
  }


  navigateToBasket(): void {
    this._router.navigate(['/basket']);
  }

  updateHeader(newCookieValue?: string): void {
    // Your logic to update the header
    const basketValue = this._cookieService.getCookie('basketEvents')
    if (basketValue && JSON.parse(basketValue)) {
      this.basketItems = JSON.parse(basketValue);
    } else {
      this.basketItems = [];
    }
    console.log('This is header updated with new cookie value:', basketValue);
  }

  updateSelectedOption(option: string) {
    this.selectedOption = option;
    const language = option.toLowerCase();

    if (this.availableLangs.includes(language)) {
      this.setActiveLanguage(language);
    } else {
      this.setActiveLanguage('en');
      this.selectedOption = 'EN';
    }
    this._translocoService.selectTranslateObject('primeng').subscribe((res) => {

      this.primengConfig.setTranslation(res);
      location.reload();
    });
  }

  setActiveLanguage(language: string): void {
    this._translocoService.setActiveLang(language);
    this.selectedOption = language.toUpperCase();
    this.activeLang = language;

    localStorage.setItem('activeLang', language);
  }

  navigateToRoute() {
    const route = localStorage.getItem('routerpurp') || 'delphinaquaserenity';
    debugger
    this._router.navigate([`/${route}`]);
  }
}
