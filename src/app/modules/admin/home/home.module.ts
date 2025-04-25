import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { SliderAnimatedDirective } from '../common/directives-pipes/slider-animated.directive';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { PaymentReturnPageComponent } from '../payment-return-page/payment-return-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [BrowserModule,
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    TranslocoModule,
    MaterialModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  declarations: [HomeComponent, PaymentReturnPageComponent,
    SliderAnimatedDirective]
})
export class HomeModule { }
