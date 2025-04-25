import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { PaymentService } from 'src/app/core/services/payment/payment.service';

@Component({
  selector: 'app-payment-return-page',
  templateUrl: './payment-return-page.component.html',
  styleUrls: ['./payment-return-page.component.css']
})
export class PaymentReturnPageComponent implements OnInit {
  basketInfo: any[] = [];
  returnSuccess: boolean = false;
  selectedECollections: any;
  totalAmount: string = '';
  banktransfercheck: boolean = false;
  banktransfer: any;
  constructor(
    private _cookieService: CookieService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _paymentService: PaymentService,
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this._route.queryParamMap.subscribe((queryParams) => {
          const t = queryParams.get('tenantId');
          const e: string | null = queryParams.get('ecollectionId');
          const res: string | null = queryParams.get('reservationId');
          res ? this.banktransfercheck = true : this.banktransfercheck = false;
          this.getECollectionById(e, t, res);
        });
        this.returnSuccess = Number(paramMap.get('id')) === 0 ? true : false;
      }
    });

    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {

      this.updateHeader(newCookieValue);
    });
  }

  updateHeader(newCookieValue: string): void {
    // Your logic to update the header
    console.log('Header updated with new cookie value:', newCookieValue);
  }

  getECollectionById(model: string | null, tenant: string | null, resId: string | null): void {
    if (!model && !tenant) {
      return;
    }
    const recId = {
      recId: model,
      tenantId: tenant,
      reservationId: resId
    };
    this._paymentService.getCollectionById(recId).subscribe((response) => {
      if (response.isSuccessful) {
        this.selectedECollections = response.data;

        const checkCookie: boolean = this._cookieService.checkCookie('basketEvents');

        if (checkCookie && this.returnSuccess) {
          this._cookieService.deleteCookie("basketEvents");
        }
        this.totalAmount = this.selectedECollections.symbol + this.selectedECollections.amountByBank;
        // this.endDate = formatDate(this.selectedECollections.endDate, 'yyyy-MM-dd', 'en-US').toString();
      } else {
      }
    });
  }
  return(): void {
    window.location.href = '/' + window.location.pathname?.split('/')[1]; + '/delphinaquaserenity';
  }

}
