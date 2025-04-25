import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { HomeModule } from './home/home.module';
import { InitialAppComponent } from './initial-app.component';
import { FooterModule } from 'src/app/layout/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EventDetailsModule } from './event-details/event-details.module';
import { ConfigService } from 'src/app/core/services/config.service';
import { take } from 'rxjs';
import { InitialAppRoutingModule } from './initial-app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { PaymentReturnPageComponent } from './payment-return-page/payment-return-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    EventDetailsModule,
    HttpClientModule,
    InitialAppRoutingModule
  ],
  declarations: [	InitialAppComponent,
      PaymentReturnPageComponent
   ],
  exports: [
    InitialAppComponent,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    EventDetailsModule,
    HttpClientModule,
    InitialAppRoutingModule
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     multi: true,
  //     useFactory: (config: ConfigService) => {
  //       return () => {
  //         config.fetchEndpoints();
  //         return config.api$.pipe(take(1));
  //       };
  //     },
  //     deps: [ConfigService],
  //   },
  // ],
})
export class InitialAppModule { }
