import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventPaymentComponent } from './event-payment/event-payment.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { InitialAppComponent } from './initial-app.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'delphinaquaserenity', pathMatch: 'full'
  },
  // {
  //   path: "", component: HomeComponent
  // },
  // { path: "", component: HeaderComponent },
  // { path: "", component: FooterComponent },
  // ,
  { path: "delphinaquaserenity", component: InitialAppComponent },
  { path: "eventdetails", component: EventDetailsComponent },
  { path: "payment", component: EventPaymentComponent },

  { path: '**', redirectTo: 'delphinaquaserenity' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialAppRoutingModule { }
