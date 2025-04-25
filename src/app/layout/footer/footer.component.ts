import { Component, OnInit } from '@angular/core';
import { TicketFactSheetDto } from 'src/app/core/models/localStorage/TicketFactSheetDto';
import { GlobalService } from 'src/app/core/services/global/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  companyFactSheetDef?: TicketFactSheetDto;
  routeUrl?: string;
  footerSign: string = '©';
  constructor() {
    if (localStorage.getItem("companyFactSheetDef")) {
      this.companyFactSheetDef = JSON.parse(localStorage.getItem("companyFactSheetDef") ?? "") as TicketFactSheetDto;


      // this.companyFactSheetDef.propertyPhone = '444 90 30';

      // this.companyFactSheetDef.facebookUrl = 'https://www.facebook.com/cosmos.theatre.antalya/'
      // this.companyFactSheetDef.instagramUrl = 'https://www.instagram.com/cosmos.theatre/'
      // this.companyFactSheetDef.whatsappUrl = 'https://api.whatsapp.com/send/?phone=905498136000&amp;text=Hello+Cosmos+Theatre&amp;type=phone_number&amp;app_absent=0'
      // this.companyFactSheetDef.telegramUrl = 'https://t.me/+905498136000';

      if (!GlobalService.isNullOrEmpty(this.companyFactSheetDef?.routeByLogoUrl)) {
        this.routeUrl = this.companyFactSheetDef.routeByLogoUrl;
      }


    }
  }

  ngOnInit() {
  }

}
