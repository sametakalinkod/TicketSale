import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { PayECollectionDto } from '../../models/PayECollectionDto';
import { PaymentService } from 'src/app/core/services/payment/payment.service';
import { ActionResponse } from 'src/app/core/models/ActionResponse';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { GlobalService } from 'src/app/core/services/global/global.service';
@Component({
  selector: 'app-create-partial-payment-dialog',
  templateUrl: './create-partial-payment-dialog.component.html',
  styleUrls: ['./create-partial-payment-dialog.component.scss']
})
export class CreatePartialPaymentDialogComponent implements OnInit {
  @ViewChild('paymentIframe') paymentIframe!: ElementRef;

  checked: boolean = true;
  paymentLink?: string;
  paymentModel: PayECollectionDto;
  b2bBasketPayment: boolean = false;
  constructor(
    private _translocoService: TranslocoService,
    private _paymentService: PaymentService,
    private _dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: PayECollectionDto
  ) {
    this.paymentModel = data;
  }
  closeDialog(value?: boolean): void {
    this._dialogRef.close({ status: value ?? null });
    this.b2bBasketPayment = false;
  }

  ngOnInit() {
    this._paymentService.payB2bPartialECollectionLink(this.paymentModel).subscribe((response: ActionResponse<string>) => {
      if (response.isSuccessful) {
        this.paymentLink = response.data;
        this.b2bBasketPayment = true;
      } else {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('payments.payfailrestitle'),
          this.translate('payments.payfailresremark'),
          SweetalertType.error
        );
        this.closeDialog(false)
        GlobalService.sweetAlert(sweetAlertDto);
      }
    });
  }

  translate(key: string): any {
    return this._translocoService.translate(key);
  }

  onLoad(e: any): void {
    if (this.checked) {
      setTimeout(() => {
        const iframe = this.paymentIframe.nativeElement;
        const iframeDocument = iframe.contentWindow.document;


        iframeDocument.open();
        iframeDocument.write(this.paymentLink);
        iframeDocument.close();

        this.checked = false;
      }, 500);

    }
    const iframe1 = this.paymentIframe.nativeElement;

    try {
      const contentUrl = iframe1.contentWindow.location.href;
      let paymentResultValue: boolean = false;

      if (contentUrl.includes('paymentsuccess/0')) {
        paymentResultValue = true;
        this.closeDialog(true);
        this.b2bBasketPayment = false;

      } else if (contentUrl.includes('paymentsuccess/1')) {
        paymentResultValue = false;
        this.closeDialog(false);
        this.b2bBasketPayment = false;
      }
      if (paymentResultValue === undefined) {
        return;
      }
    } catch (error) {
      console.error('Unable to access the iframe content URL. Make sure the iframe is from the same origin.');
    }
  }

}
