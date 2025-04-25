import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPaymentComponent } from './event-payment.component';
import { EventPaymentBasketDialogComponent } from './dialogs/event-payment-basket-dialog/event-payment-basket-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventPaymentComponent, EventPaymentBasketDialogComponent]
})
export class EventPaymentModule { }
