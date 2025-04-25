import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/common/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslocoModule } from '@ngneat/transloco';
import { CustomTermsConditionsComponent } from './dialogs/custom-terms-conditions/custom-terms-conditions.component';
import { SharedPipeModule } from 'src/app/pipes/shared-pipe.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreatePartialPaymentDialogComponent } from './dialogs/create-partial-payment-dialog/create-partial-payment-dialog.component';
import { AccountNumberFormatPipe } from '../common/directives-pipes/account-number.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@NgModule({
  imports: [
    CommonModule,
    SharedPipeModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatStepperModule,
    MatRadioModule,
    TranslocoModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    HttpClientModule,
    NgbModule,
    TranslocoRootModule
  ],
  declarations: [BasketComponent,
    CustomTermsConditionsComponent,
    CreatePartialPaymentDialogComponent,
    AccountNumberFormatPipe
  ]
})
export class BasketModule { }
