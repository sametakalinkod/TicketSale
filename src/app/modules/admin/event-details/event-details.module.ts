import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailsComponent } from './event-details.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EventMainResPaymentComponent } from './event-main-res-payment/event-main-res-payment.component';
import { EventMainResRequestComponent } from './event-main-res-request/event-main-res-request.component';
import { EventDetailsBasketComponent } from './dialogs/event-details-basket/event-details-basket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EventMainResExstrasComponent } from './event-main-res-exstras/event-main-res-exstras.component';
import { MaterialModule } from 'src/app/material-module';

const routes: Routes = [
  {
    path: ':id',
    component: EventDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatDialogModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EventDetailsComponent,
    EventMainResPaymentComponent,
    EventMainResRequestComponent,
    EventDetailsBasketComponent,
    EventMainResExstrasComponent
  ]
})
export class EventDetailsModule { }
