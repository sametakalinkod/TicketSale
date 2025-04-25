import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './modules/admin/home/home.component';
import { EventDetailsComponent } from './modules/admin/event-details/event-details.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EventPaymentComponent } from './modules/admin/event-payment/event-payment.component';
import { InitialDataResolver } from './app.resolvers';
import { BasketComponent } from './modules/admin/basket/basket.component';
import { DocumentsComponent } from './modules/admin/documents/documents.component';
import { PaymentReturnPageComponent } from './modules/admin/payment-return-page/payment-return-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from './material-module';
import { MatIconModule } from '@angular/material/icon';




const routes: Routes = [
  {
    path: '', redirectTo: '/delphinaquaserenity', pathMatch: 'full', resolve: {
      initialData: HomeComponent,
    }
  },
  {
    path: 'delphinaquaserenity', component: HomeComponent, resolve: {
      initialData: InitialDataResolver,
    }
  },
  { path: "eventdetails/:id", component: EventDetailsComponent },
  { path: "payment", component: EventPaymentComponent },
  { path: "basket", component: BasketComponent },
  { path: "documents/:id", component: DocumentsComponent },
  {
    path: 'public/paymentsuccess/:id', component: PaymentReturnPageComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }),
    BrowserModule, CommonModule,
  RouterModule.forRoot(routes), MatSidenavModule, MaterialModule, MatIconModule],
  exports: [RouterModule, BrowserModule, CommonModule]
})
export class AppRoutingModule { }
