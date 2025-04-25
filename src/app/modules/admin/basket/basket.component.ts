import { ChangeDetectorRef, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { SweetalertType } from 'src/app/common/enums/SweetalertType.enum';
import { SweetAlertDto } from 'src/app/common/models/SweetAlertDto';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { BinDto } from './models/BinDto';
import { PaymentService } from 'src/app/core/services/payment/payment.service';
import { GetInstallmentOptionsDto } from './models/GetInstallmentOptionsDto';
import { ActionResponse } from 'src/app/core/models/ActionResponse';
import { PaymentDetailDto } from './models/PaymentDetailDto';
import { PayECollectionDto } from './models/PayECollectionDto';
import { formatDate } from '@angular/common';
import { CreditCardDto } from './models/CreditCardDto';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/core/services/global/cookie.service';
import { CreatePaymentByTickerModel } from './models/CreatePaymentByTickerModel';
import { CreateECollectionByB2BDto } from './models/CreateECollectionByB2BDto';
import { LanguageCode } from '../common/enums/LanguageCode.enum';
import { TicketSaleDto } from './models/TicketSaleDto';
import { PmsTicketOwnerRequestDto } from './models/PmsTicketOwnerRequestDto';
import { PmsTicketCustomerDetailDto } from './models/PmsTicketCustomerDetailDto';
import { ErpECollectionReviewDto } from '../common/models/ErpECollectionReviewDto';
import { TranslocoService } from '@ngneat/transloco';
import { CustomerInvoiceAddressForGuestDto } from './models/CustomerInvoiceAddressForGuestDto';
import { Gender } from '../common/enums/gender.enum';
import { CustomTermsConditionsComponent } from './dialogs/custom-terms-conditions/custom-terms-conditions.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/core/services/products/Products.service';
import { StorageDto } from 'src/app/core/models/localStorage/storageDto';
import { TermsandConditionsDto } from '../common/models/TermsandConditionsDto';
import { PmsExtraProgramDefinitionsDto } from 'src/app/common/models/PmsExtraProgramDefinitionsDto';
import { PmsTicketExtraProgramDto } from './models/PmsTicketExtraProgramDto';
import { MatExpansionPanel } from '@angular/material/expansion';
import { TicketFactSheetDto } from 'src/app/core/models/localStorage/TicketFactSheetDto';
import { CreatePartialPaymentDialogComponent } from './dialogs/create-partial-payment-dialog/create-partial-payment-dialog.component';
import { ResTypes } from '../common/enums/ResTypes.enum';
import { PaymentTypes } from '../common/enums/PaymentTypes.enum';
import { SaveNextTimeModelDto } from './models/SaveNextTimeModelDto';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  animations: [
    trigger(
      'flyOut',
      [
        transition(
          ':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))
        ]
        ),
        transition(
          ':leave', [
          style({ transform: 'translateX(0)', 'opacity': 1 }),
          animate('500ms', style({ transform: 'translateX(-100%)', 'opacity': 0 })),
        ]
        )
      ]
      // [
      //   transition(
      //     ':enter', [
      //     style({ transform: 'translateX(100%)', opacity: 0 }),
      //     animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))
      //   ]
      //   ),
      //   transition(
      //     ':leave', [
      //     style({ transform: 'translateX(0)', 'opacity': 1 }),
      //     animate('500ms', style({ transform: 'translateX(-100%)', 'opacity': 0 })),

      //   ]
      //   )]
    )
  ],
})

export class BasketComponent implements OnInit {
  @ViewChild('partialPaymentPanel', { static: false }) partialPaymentPanel!: MatExpansionPanel;
  @ViewChild('payInHotelPanel', { static: false }) payInHotelPanel!: MatExpansionPanel;
  @ViewChild('banktransferPanel', { static: false }) banktransferPanel!: MatExpansionPanel;

  paymentProcess: boolean = false;
  guestFormOpened: boolean = false;
  paymentForm!: FormGroup;
  yearSelectBox: string[] = [];
  monthSelectBox: string[] = [];
  cardBankName: string | null = null;
  bin: BinDto | null = null;
  tenantId: string = '5fbfb39a-7fd3-47ff-80cc-bdd3bceb7718';
  selectedPayOption: string = '2';
  installments!: any;
  // newInstallment: { index: number, value: { [key: number]: number } }[] = [];
  selectedECollections: ErpECollectionReviewDto = new ErpECollectionReviewDto();
  totalPrice: number = 0;
  paymentLink!: string;
  selectedValue: string = '1';
  //basketItems: BasketListDto[] = [];
  basketItems: any[] = [];
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6]; // Define array of quantity options
  ticketPrices: number = 0;
  extraPrices: number = 0;
  guestForm: FormGroup[] = [];


  ecollectionId: string = '';
  langCode: string = 'tr';
  selectedVirtualPos: string | null = null;
  selectedInstallment: string = '1';


  min: number = 0;
  max: number = 20;
  step: number = 1;
  value: number = 0;
  language?: string;

  genderType: { id: number; name: string }[] = [];


  isChecked: boolean = false;
  tokenInfo?: StorageDto;
  termHtmlList?: TermsandConditionsDto[] = [];
  totalDiscount: number = 0;
  noPayment: boolean = false;
  amountPaidInitial: number = 0;
  factSheetModel?: TicketFactSheetDto;
  selectedPaymentTypeValue?: string;
  remainPayment: boolean = false;
  initialPaymentId?: string;
  remainingAmount?: number;
  IsMultipleCardPaymentActive: boolean = true;
  newInstallment: any[] = [];
  initialTotalPrice?: number;


  isPayWithCreditCard: boolean = false;
  isPayWithBankTransfer: boolean = false;
  isPayOnGate: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _translocoService: TranslocoService,
    private _paymentService: PaymentService,
    private _router: Router,
    private _cookieService: CookieService,
    private renderer: Renderer2,
    private _dialog: MatDialog,
    private _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this._translocoService.load(this.langCode).subscribe(() => {
      this.genderType.forEach(element => {
        element.name = this.translate(element.name)
      });
    });

    this.tokenInfo = GlobalService.tokenInfo() as StorageDto;
    this.factSheetModel = GlobalService.getFactSheetDef() as TicketFactSheetDto;
    this.isPayOnGate = this.factSheetModel.isPayOnGate ?? false;
    this.isPayWithCreditCard = this.factSheetModel.isPayWithCreditCard ?? false;
    this.isPayWithBankTransfer = this.factSheetModel.isPayWithBankTransfer ?? false;
    this.IsMultipleCardPaymentActive = this.factSheetModel.isMultipleCardPaymentActive ?? false;

    this.langCode = this._translocoService.getActiveLang();
    this.getPrivacyDocumentsByProperty();
    // const language = this._translocoService.getActiveLang();
    // if (this.language !== language) {
    //   this.language = language;
    //   this._localeService.setLocale(language);
    //   const item = this._localeService.getLocale(); 
    // }

    for (var n in Gender) {
      if (typeof Gender[n] === 'number') {

        this.genderType.push({ id: <any>Gender[n], name: this.translate(n) })
      }
    }

    const data = this._cookieService.getCookie('basketEvents');
    if (data && JSON.parse(data).length > 0) {
      this.basketItems = JSON.parse(data ?? '');
      this.ticketPrices = this.calculateAllTicketPrices();
      this.extraPrices = this.calculateAllExtrasPrices();
      this.basketItems.forEach(item => {
        item.category = this.capitalizeFirstLetter(item.category);
        item.sessionTime = this.formatTime(item.sessionTime);
        item.categoryDisplay = this.parseOrDefault(item.category, this.langCode, item.category);
        item.remarkDisplay = this.parseOrDefault(item.remark, this.langCode, item.remark);
        item.titleDisplay = this.parseOrDefault(item.title, this.langCode, item.title);
      });

    } else {
      this._router.navigate(['']);
    }
    this._cookieService.subscribeToCookieChanges().subscribe((newCookieValue: string) => {
      // Handle the event in the header component

      this.updateHeader(newCookieValue);
    });

    this.paymentForm = this._formBuilder.group({
      name: [''],
      lastname: [''],
      adress: [''],
      email: ['', [Validators.required, this.customEmailValidator()]],
      phone: [''],
      savenexttime: [true],
      cardname: ['', Validators.required],
      cardnumber: ['', Validators.required],
      month: [''],
      year: [''],
      cvc: [''],
      gender: []
    });

    const yearNow = new Date().getFullYear();
    for (let index = 1; index < 13; index++) {
      var month: string = index.toString();
      if (index < 10)
        month = `0${index}`;
      const element = yearNow + index;
      this.yearSelectBox.push(element.toString());
      this.monthSelectBox.push(month);
    }

    this.ecollectionId = this.generateRecId();
    this.tenantId = GlobalService.tokenInfo().TenantId;

    window.scrollTo(0, 0);
    this.calculateTotalPrice()
  }

  async paymentProcessContinue(): Promise<void> {

    let remindCount = 0;
    let reminderPopup = '';
    this.basketItems.forEach(element => {
      //const remindCount = element.reminder - (element.adultCount + element.childCount);
      if (element.calculateType === 1) {
        remindCount = element.reminder - element.adultCount;
      } else {
        remindCount = element.reminder - (element.adultCount + element.childCount);
      }
      if (remindCount < 0) {
        reminderPopup = element.remarkDisplay + ' - ' + element.categoryDisplay + this.translate('sweetalert.reminingticketerror') + element.reminder.toString() + '.';
        return;
      }
    });

    if (remindCount < 0) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.error'),
        reminderPopup,
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
      return;
    }


    if (!this.guestFormOpened && !this.paymentProcess) {
      var count: number = 0;


      this.basketItems.forEach(element => {
        // element.guestInfo = new Array(element.childCount + element.paxCount).fill(new GuestInfoDto());
        count += (element.childCount ?? 0) + (element.adultCount ?? 0);
      });
      for (let i = 0; i < count; i++) {
        const formGroup = this._formBuilder.group({
          gender: [Validators.required],
          name: ['', Validators.required],
          surName: ['', Validators.required],
          birthDate: [i === 0 ? new Date(new Date().setFullYear(new Date().getFullYear() - 19)) : new Date()]
        });
        this.guestForm.push(formGroup);
      }

      this.guestFormOpened = true;
      this._cookieService.setCookie('basketEvents', JSON.stringify(this.basketItems), 7);
      return;
    }
    if (this.guestFormOpened) {
      let index = 0;
      let checkResults: any[] = [];
      this.totalDiscount = 0;
      this.basketItems.forEach(basket => {

        let formValues = [];
        for (let i = 0; i < (basket.adultCount + basket.childCount); i++) {
          formValues.push(this.guestForm[index].value);
          index++;
        }

        if (basket.calculateType === 0 && basket?.freeFemaleCustomer) {
          const womenCount = formValues.reduce((count, item) => {
            if (item.gender === 1) {
              count++;
            }
            return count;
          }, 0);

          this.totalDiscount += (basket.adultPrice * womenCount);
        }



        const checkMaleResult = this.checkMale(basket, formValues);

        if (checkMaleResult.length > 0) {
          checkResults.push(...checkMaleResult);
        }

        index = (basket.adultCount + basket.childCount);

      });

      if (checkResults.length > 0) {
        const items = this.basketItems.filter(f => checkResults.includes(f.sessionId)).map(m => m.remark).toString();

        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.error'),
          `${items} Kontenjan Dolu`,
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
        return;
      }

      if (this.totalDiscount != 0) {
        this.calculateTotalPrice()

        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.success'),
          this.translate('sweetalert.basketupdated'),
          SweetalertType.success
        );
        GlobalService.sweetAlert(sweetAlertDto);
      }
    }
    const valid = this.guestFormValidationCheck();

    if (!valid) {

      return;
    }



    if (this.paymentProcess) {
      const email = this.paymentForm.get('email');
      if (!email?.valid) {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.error'),
          this.translate('sweetalert.checkemail'),
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
        return;
      }

      if (!this.isChecked) {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.error'),
          this.translate('sweetalert.checkterms'),
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
        return;
      }

      const ticketModel = await this.getTicketCreateModel();
      if (this.noPayment) {
        this.makeReservationWithoutPayment(ticketModel);
        return;
      }
      this.makePayment(ticketModel);
      return;
    }


    this.paymentProcess = true;
    this.guestFormOpened = false;
    this.getECollectionWithoutId(this.tenantId)
  }

  onValueChangeCvv(e: any): void {
    if (e.data) {
      const inputVal = e.target.value.replace(/\D/g, '');

      this.paymentForm.get('cvc')?.setValue(inputVal);
    }
  }

  translate(key: string): any {
    return this._translocoService.translate(key);
  }

  getBankFromCardNumber(): void {
    const model = {
      bin: this.paymentForm?.value.cardnumber.toString(),
      tenantId: this.tenantId
    };

    this._paymentService.getBankFromCardNumber(model).subscribe((response: ActionResponse<string>) => {
      if (response.isSuccessful) {
        this.cardBankName = response.data;
      } else {
        this.cardBankName = null;
      }
    });
  }

  async getInstallmentOptions(): Promise<void> {
    await this.calculateTotalPrice();
    const amount = this.partialPaymentPanel?.expanded ? this.amountPaidInitial : this.totalPrice;
    const amountType = Number(this.selectedPayOption);
    const installmentoptionmodel = new GetInstallmentOptionsDto(
      this.paymentForm?.value?.cardnumber.toString(),
      this.selectedECollections.propertyId,
      amount,
      this.selectedECollections.selectedVirtualPosId,
      null,
      this.tenantId,
      amountType
    );
    this._paymentService.getPaymentDetail(installmentoptionmodel).subscribe((response: ActionResponse<PaymentDetailDto>) => {
      if (response.isSuccessful) {
        this.bin = response.data.bin;

        this.selectedVirtualPos = response.data.virtualPos?.recId ?? null;

        if (response.data.installmentTables && response.data.installmentTables.length > 0 && !this.selectedECollections.undoInstallment) {

          this.installments = response.data.installmentTables[0].installments;
          this.newInstallment = Object.keys(this.installments).sort((a, b) => +a - +b).map(key => ({ key, value: this.installments[Number(key)] }));

          // this.sortedInstallments = Object.keys(this.installments).sort((a, b) =>+a - +b).map(key =>({key,value:this.installments[key]}));
        } else {
          // this.installments =
          //   { 1: [this.selectedECollections.amount, 0] }
          //   ;
          this.installments = { 1: { value1: amount, value2: 0 } };

          this.newInstallment = Object.keys(this.installments).sort((a, b) => +a - +b).map(key => ({ key, value: this.installments[Number(key)] }));

        }
        // if (response.data.installmentTables && response.data.installmentTables.length > 0) {
        //   this.installments = response.data.installmentTables[0].installments;

        //   this.newInstallment = Object.entries(this.installments).map(([key, value], index) => ({
        //     index,
        //     value: { key: +key, value }
        //   }));
        // } else {
        //   this.installments =
        //     { 1: this.selectedECollections.amount }
        //     ;
        //   this.newInstallment = Object.entries(this.installments).map(([key, value], index) => ({
        //     index,
        //     value: { key: +key, value }
        //   }));
        // }
      } else {
        this.installments = { 1: { value1: amount, value2: 0 } };

        this.newInstallment = Object.keys(this.installments).sort((a, b) => +a - +b).map(key => ({ key, value: this.installments[Number(key)] }));

      }
    });
  }
  getTicketCreateModel(): TicketSaleDto {
    const model: TicketSaleDto = new TicketSaleDto();

    const ownerTicketList: PmsTicketOwnerRequestDto[] = [];
    const customerDetails: PmsTicketCustomerDetailDto[] = [];
    const invoceAdressInfo: CustomerInvoiceAddressForGuestDto[] = [];
    const extraPrograms: PmsTicketExtraProgramDto[] = [];
    var roomCountByItems: number = 0;

    const invoiceItem = new CustomerInvoiceAddressForGuestDto();



    this.basketItems.forEach((element, indexMain) => {

      const ownerItem: PmsTicketOwnerRequestDto = {
        collectionEmail: this.paymentForm?.value?.email,
        produceId: element.sessionId,
        programId: element.itemRecId,
        adultCount: element.adultCount,
        childCount: element.childCount,
        amount: element.totalPrice,
        // remark: this.remark,
        ticketCustomerDetails: [],
        resType: 0,
        //try
        curr: 1,
        localAmount: element.totalPrice,
        netAmount: element.totalPrice,
        paymentPropertyId: this.selectedECollections.propertyId,
        extraAmount: 0,
        resStatus: 1,
        discountRatio: 0,
        ticketAmount: element.totalPrice,
        ticketDate: formatDate(element.date, 'yyyy-MM-dd', 'en-US'),
        totalAmount: element.totalPrice,
        recId: crypto.randomUUID(),
        saleUser: '00000000-0000-0000-0000-000000000000',
        activityChannelName: 'WEB',
        collectionPaid: false,
        currencyId: this.selectedECollections.currencyId,
        discountAmount: 0,
        propertyId: this.selectedECollections.propertyId,
        ismalecontrol: element.isMaleControl
        // reservationId: this.reservationInfo.resOwnerId,
        // ticketDate: findItem.date,
        // collectionEmail: filteredGuestList.length > 0 ? filteredGuestList[0].email : ''
      };

      for (let index = 0; index < (element.adultCount + element.childCount); index++) {
        const customer = (this.guestForm[roomCountByItems].value as PmsTicketCustomerDetailDto)
        customer.name = customer.name;
        customer.surName = customer.surName;
        customer.customerId = crypto.randomUUID();
        customer.recId = crypto.randomUUID();
        customer.email = index === 0 ? this.paymentForm?.value?.email : '';
        //customer.countryId = element.countryId;
        customer.produceId = element.sessionId;
        customer.selected = false;
        // customer.enterpriseId = this.tenantId;
        customer.birthDate = customer.birthDate;
        ownerItem.ticketCustomerDetails.push(customer)
        customerDetails.push(customer)
        roomCountByItems += 1;

        if (indexMain === 0 && index === 0) {
          const invoiceItem = new CustomerInvoiceAddressForGuestDto();

          invoiceItem.recId = crypto.randomUUID();
          invoiceItem.customerId = crypto.randomUUID();
          invoiceItem.invoiceName = this.paymentForm?.value?.name + ' ' + this.paymentForm?.value?.surName;
          invoiceItem.address = this.paymentForm?.value?.address;
          invoiceItem.email = this.paymentForm?.value?.email;

          invoceAdressInfo.push(invoiceItem);
        }
      }
      ownerTicketList.push(ownerItem);

      element.extraServices.forEach((elementExtra: any) => {
        const extraItem: PmsTicketExtraProgramDto = {
          recId: crypto.randomUUID(),
          ticketOwnerId: ownerItem.recId,
          amount: elementExtra.price * elementExtra.count,
          curr: elementExtra.curr,
          currencyId: elementExtra.currencyId,
          extraId: elementExtra.recId,
          isNew: true,
          localAmount: elementExtra.price * elementExtra.count,
          price: elementExtra.price,
          quantity: elementExtra.count,
          ticketdate: ownerItem.ticketDate
        };
        extraPrograms.push(extraItem);
      });
    });

    model.ownerTicketList = ownerTicketList;
    model.ticketCustomerDetails = customerDetails;
    model.customerInvoiceAddress = invoceAdressInfo;
    model.ticketExtraProgram = extraPrograms;
    return model;
  }
  async makePayment(model: TicketSaleDto): Promise<void> {
    if (!this.paymentForm.valid && this.paymentProcess) {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.error'),
        this.translate('sweetalert.checkvalidation'),
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
      return;
    }


    const firstPart = this.paymentForm?.value?.month?.toString() ?? '';
    const secondPart = this.paymentForm?.value?.year?.toString().substring(2) ?? '';
    const dateNow = formatDate(new Date(), 'MM-yyyy', 'en-US');
    const monthNow = dateNow.substring(0, 2);
    const yearNow = dateNow.substring(5, 7);
    if (!this.banktransferPanel?.expanded && !this.payInHotelPanel?.expanded) {

      if (Number(yearNow) === Number(secondPart)) {
        if (Number(monthNow) > Number(firstPart)) {
          const sweetAlertDto = new SweetAlertDto(
            this.translate('sweetalert.error'),
            this.translate('sweetalert.checkexpiration'),
            SweetalertType.error
          );
          GlobalService.sweetAlert(sweetAlertDto);
          return;
        }
      } else if (Number(yearNow) > Number(secondPart)) {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.error'),
          this.translate('sweetalert.checkexpiration'),
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
        return;
      }


    }


    const craditCard = new CreditCardDto(
      this.paymentForm?.value?.cardname?.toString() ?? '',
      this.paymentForm?.value?.cardnumber?.toString() ?? '',
      firstPart,
      secondPart,
      this.paymentForm?.value?.cvc?.toString() ?? '',
      this.bin ? this.bin.organization : null
    );

    // const paymentModel = new PayECollectionDto(
    //   craditCard,
    //   this.calculateTotalPrice(),//this.selectedECollections.amount,
    //   'TRY',//this.selectedECollections.code,
    //   this.bin?.alias ?? '',
    //   '1',
    //   this.selectedECollections.selectedVirtualPosId,
    //   '59e67dc5-4729-43fb-9f4d-0c4361019972',//this.selectedECollections.recId,
    //   '9ce469ff-da71-4132-af4a-96868794ebfa',//this.selectedECollections.propertyId,
    //   '5fbfb39a-7fd3-47ff-80cc-bdd3bceb7718',//this.tenantId,
    //   true,
    //   '',//this.tokenInfo?.UserName ?? this.selectedECollections.eMail,
    //   '',//this.tokenInfo?.ContactEmail ?? this.selectedECollections.eMail,
    //   2250//(this.selectedPayOption === '2') ? this.installments[this.selectedInstallment] : this.selectedECollections.amount,
    // );




    const saveNextTime = this.paymentForm.get('savenexttime')?.value;

    if (saveNextTime) {
      const newItem = new SaveNextTimeModelDto();

      newItem.name = this.paymentForm.get('savenexttime')?.value;
      newItem.surName = this.paymentForm.get('savenexttime')?.value;
      newItem.adress = this.paymentForm.get('savenexttime')?.value;
      newItem.email = this.paymentForm.get('savenexttime')?.value;
      newItem.phone = this.paymentForm.get('savenexttime')?.value;
    }

    const paymentModel = new PayECollectionDto(
      craditCard,
      //toplamtutar
      //this.totalPrice,
      this.calculateTotalPrice(),
      //0.1,
      this.selectedECollections.code,
      this.bin?.alias ?? '',
      //taksit gelicek
      //'1'
      this.selectedInstallment,
      this.selectedVirtualPos,
      this.selectedECollections.recId,
      this.selectedECollections.propertyId,
      this.tenantId,
      true,
      this.paymentForm?.value?.email,
      this.paymentForm?.value?.email,
      null,
    );



    const erpecollectionreviewItem = new CreateECollectionByB2BDto(
      this.ecollectionId,
      this.selectedECollections.propertyId,
      9,
      this.paymentForm?.value?.email,// mail
      //toplamtutar
      this.calculateTotalPrice(), // amount
      //0.1,
      this.selectedECollections.currencyId,// currency
      1,
      craditCard.cardHolder, // fullname
      0,
      // link tarihi1
      new Date(),
      null,
      null,
      this.langCode ? LanguageCode[this.langCode as keyof typeof LanguageCode] : null,
      //aciklama
      'Kredi kartı ödeme.',
      'ScotchY',
      1453,
      this.paymentForm?.value?.email,
      1 // creditcard
    );



    switch (this.partialPaymentPanel?.expanded) {
      case (true && !this.remainPayment):
        try {
          if (this.amountPaidInitial > this.totalPrice) {
            const sweetAlertDto = new SweetAlertDto(
              this.translate('sweetalert.error'),
              'initialPaymentAmountError',
              SweetalertType.error
            );
            GlobalService.sweetAlert(sweetAlertDto);
            return;
          }
          this.initialPaymentId = crypto.randomUUID();
          paymentModel.amount = this.amountPaidInitial;
          erpecollectionreviewItem.amount = this.amountPaidInitial;
          erpecollectionreviewItem.recId = this.initialPaymentId;
          const b2bPartialPay = {
            paymentModel: paymentModel,
            createECollection: erpecollectionreviewItem
          };
          const dialogRef = this._dialog.open(CreatePartialPaymentDialogComponent, {
            maxWidth: '100vw !important',
            disableClose: false,
            data: b2bPartialPay
          });
          const response = await dialogRef.afterClosed().toPromise();
          if (response && response.status) {
            // Successful payment
            const sweetAlertDto = new SweetAlertDto(
              this.translate('sweetalert.success'),
              'Ödemeniz alındı, lütfen kalan tutarı ödeyin.',
              SweetalertType.success
            );
            GlobalService.sweetAlert(sweetAlertDto);

            const remainingAmount = this.totalPrice - this.amountPaidInitial;
            this.remainingAmount = remainingAmount;
            this.amountPaidInitial = remainingAmount;
            this.remainPayment = true;
          } else {
            // Payment unsuccessful
            const sweetAlertDto = new SweetAlertDto(
              this.translate('sweetalert.error'),
              'Ödeme Başarısız.',
              SweetalertType.error
            );
            GlobalService.sweetAlert(sweetAlertDto);
            //return false;
          }
        } catch (error) {
          // Handle any errors that may occur during dialog opening or closing
          console.error(error);
          //return false;
        }
        this.resetCardPaymentForm();
        return;
    }

    if (this.remainingAmount) {
      paymentModel.amount = this.amountPaidInitial;
      erpecollectionreviewItem.amount = this.amountPaidInitial;
      model.initialPaymentId = this.initialPaymentId;
    }

    if (this.banktransferPanel?.expanded) {
      model.ownerTicketList?.forEach(element => {
        element.resType = ResTypes.Option
      });

      erpecollectionreviewItem.paymentType = PaymentTypes.transfer;
      erpecollectionreviewItem.payeeNote = 'Banka havalesi.';
    } else if (this.payInHotelPanel?.expanded) {
      model.ownerTicketList?.forEach(element => {
        element.resType = ResTypes.Option
      });

      erpecollectionreviewItem.paymentType = PaymentTypes.cash;
      erpecollectionreviewItem.payeeNote = 'Kapıda Ödeme.';
    } else if (this.selectedValue === 'prepay') {
      const prePayAmount = this.totalPrice * (this.factSheetModel?.prePaymentRatio ?? 0) / 100;
      erpecollectionreviewItem.amount = prePayAmount;
      paymentModel.amount = prePayAmount;
    }

    const createTicket = new CreatePaymentByTickerModel();
    createTicket.paymentModel = paymentModel;
    createTicket.createECollection = erpecollectionreviewItem;
    createTicket.ticketBuyModel = model;

    this._paymentService.createPaymentTicketSale(createTicket).subscribe((response: ActionResponse<string>) => {
      if (response.isSuccessful) {
        // this.paymentLink = response.data;
        // const tempContainer = document.getElementById('paymentForm');
        // if (tempContainer) {
        //   tempContainer.innerHTML = this.paymentLink as string;
        // }

        // const paymentForm = tempContainer?.querySelector('#PaymentForm') as HTMLFormElement;

        // if (paymentForm && paymentForm.isConnected) {
        //   paymentForm.submit();
        // } else {
        //   console.error('PaymentForm element not found.');
        // }
        if (this.banktransferPanel?.expanded || this.payInHotelPanel?.expanded) {
          // const modelBank = {
          //   amount: this.totalPrice,
          //   voucher: this.voucher,
          //   email: this.horizontalStepperForm.get('step1')?.value?.email
          // }
          // this._cookieService.set("bank-transfer-value", JSON.stringify(modelBank));

          window.location.href = window.location.origin.toLowerCase() +
            `/public/paymentsuccess/0?tenantId=${this.tenantId}&ecollectionId=${response.data}`;
          return;
        }
        // this._cookieService.delete("cookie-value-set");
        this.paymentLink = response.data;
        const tempContainer = document.getElementById('paymentForm');

        if (tempContainer !== null) {
          tempContainer!.innerHTML = this.paymentLink ?? '';
          const paymentForm = tempContainer.querySelector('#PaymentForm') as HTMLFormElement;
          if (paymentForm && paymentForm.isConnected) {
            paymentForm.submit();
          } else {
            console.error('PaymentForm element not found.');
          }
        }
      } else {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('payments.payfailrestitle'),
          this.translate('payments.payfailresremark'),
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
      }
    });
  }

  makeReservationWithoutPayment(model: TicketSaleDto): void {
    const erpecollectionreviewItem = new CreateECollectionByB2BDto(
      this.ecollectionId,
      this.selectedECollections.propertyId,
      9,
      this.paymentForm?.value?.email,// mail
      //toplamtutar
      this.calculateTotalPrice(), // amount
      //0.1,
      this.selectedECollections.currencyId,// currency
      1,
      '',//craditCard.cardHolder, // fullname
      0,
      // link tarihi1
      new Date(),
      null,
      null,
      this.langCode ? LanguageCode[this.langCode as keyof typeof LanguageCode] : null,
      //aciklama
      'Kredi kartı ödeme.',
      'ScotchY',
      1453,
      this.paymentForm?.value?.email,
      1 // creditcard
    );
    const createTicket = new CreatePaymentByTickerModel();
    createTicket.createECollection = erpecollectionreviewItem;
    createTicket.ticketBuyModel = model;

    this._paymentService.createPaymentTicketSale(createTicket).subscribe((response: ActionResponse<string>) => {
      if (response.isSuccessful) {
        window.location.href = window.location.origin.toLowerCase() + '/' + `/public/paymentsuccess/0?tenantId=${this.tenantId}&ecollectionId=${createTicket?.createECollection?.recId ?? ''}`;
        return;
      } else {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('payments.payfailrestitle'),
          this.translate('payments.payfailresremark'),
          SweetalertType.error
        );
        GlobalService.sweetAlert(sweetAlertDto);
      }
    });
  }
  onQuantityChange(selectedValue: any, sessionId: string): void {

    this.basketItems.find(x => (x.sessionId && x.sessionId === sessionId)).adultCount = selectedValue;
  }
  calculateTotalPrice(percentage?: number): number {
    let totalPrice = 0;
    let extraPrice = 0;
    this.basketItems.forEach(item => {

      // item.totalPrice = 0;
      // const adultCount = parseInt(item.adultCount, 10);
      // const totalPrice = (adultCount * item.adultPrice);
      // item.totalPrice = totalPrice;
      totalPrice += item.totalPrice ?? 0;
      if (item.extraServices && item.extraServices.length > 0) {
        item.extraServices.forEach((extraService: { count: number; price: number; }) => {
          const extra = extraService.count * extraService.price;
          totalPrice += extra;
          extraPrice += extra;
        });
      }
    });
    // let grandTotal = this.basketItems.reduce((total, item) => total + item.totalPrice, 0);
    if (percentage) {
      totalPrice = totalPrice * percentage / 100;
    }

    if (this.totalDiscount !== 0) {
      totalPrice -= this.totalDiscount;
    }

    if (totalPrice === 0) {
      this.noPayment = true;
    } else {
      this.noPayment = false;
    }
    this.totalPrice = totalPrice;
    this.extraPrices = extraPrice;
    return totalPrice;

    //return totalPrice * parseInt(this.selectedValue, 10);
  }

  removeItem(selectedItem: any) {
    const index = this.basketItems.findIndex(item => item === selectedItem);


    if (index !== -1) {
      this.basketItems.splice(index, 1);
      this._cookieService.setCookie('basketEvents', JSON.stringify(this.basketItems), 7);

      if (this.basketItems.length === 0) {
        this._router.navigate(['/delphinaquaserenity']);
      } else {
        const sweetAlertDto = new SweetAlertDto(
          this.translate('sweetalert.eventremoved'),
          '',
          SweetalertType.success
        );
        GlobalService.sweetAlert(sweetAlertDto);
        this.ticketPrices = this.calculateAllTicketPrices();

      }
    }
    this.calculateTotalPrice();
  }


  updateHeader(newCookieValue: string): void {
    // Your logic to update the header
    console.log('Header updated with new cookie value:', newCookieValue);
  }

  formatTime(time: string): string {
    const [hoursStr, minutesStr] = time.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    const formattedHours = hours < 10 ? '0' + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes}`;
  }




  routeItem(selectedEvent?: any): void {
    if (selectedEvent) {
      const value = selectedEvent.itemRecId + 'date' + formatDate(selectedEvent.date, 'yyyy-MM-dd', 'en-US')

      const encodedGuid = btoa(value);
      const url = this._router.serializeUrl(
        this._router.createUrlTree([`/eventdetails/${encodedGuid}`])
      );
      //open different page
      // window.open(url, '_blank');
      window.location.href = url;
    }
  }
  calculateAllTicketPrices(): number {
    this.basketItems.forEach(item => {
      // item.total = 0;
      // const adultCount = parseInt(item.adultCount, 10);
      // const totalPrice = (adultCount * item.adultPrice);
      // item.total = totalPrice;

    });
    let grandTotal = this.basketItems.reduce((total, item) => total + (item.totalPrice ?? 0), 0);

    return grandTotal;

    return 0;
  }
  calculateAllExtrasPrices(): number {
    let total = 0;

    this.basketItems.forEach(item => {
      // item.total = 0;
      if (item.extraServices && item.extraServices.length > 0) {
        item.extraServices.forEach((extraService: { count: number; price: number; }) => {
          total += extraService.count * extraService.price;
        });
      }
    });
    this.calculateTotalPrice();


    return total;
  }


  increase(id: string, column: string) {

    let item = this.basketItems.find(x => x.itemRecId === id);

    if (item) {

      // if (column === 'adultCount') {
      //   item.totalPrice += item.adultPrice;
      // } else {
      //   item.totalPrice += item.childPrice;
      // }
      if (item[column] < this.max && item[column] + this.step <= this.max) {
        item[column] += this.step;
      }

      if (item.calculateType !== 0) {
        var totalpax = item.adultCount + item.childCount;
        var maxPax = Number(item.maxPax ?? 1);

        if (maxPax < totalpax) {
          item[column] -= this.step;
        }
      }

      item.totalPrice = this.totalPricePerItem(item, column);

      this.ticketPrices = this.calculateAllTicketPrices();

    }
    this.calculateTotalPrice();
    this.applyRotation('20deg', column); // Apply rotation after increasing
  }

  decrease(id: string, column: string) {

    let item = this.basketItems.find(x => x.itemRecId === id);

    if (item) {

      if (item.childCheck && item[column] === 1) {
        return;
      }
      // if (column === 'adultCount') {
      //   item.totalPrice -= item.adultPrice;
      // } else {
      //   item.totalPrice -= item.childPrice;
      // }

      if (item[column] > this.min && item[column] - this.step >= this.min) {
        item[column] -= this.step;
      }

      if (item.calculateType !== 0) {
        var totalpax = item.adultCount + item.childCount;
        var minPax = Number(item.minPax ?? 1);

        if (totalpax < minPax) {
          item[column] += this.step;
        }
      }

      item.totalPrice = this.totalPricePerItem(item, column);

      this.ticketPrices = this.calculateAllTicketPrices();

    }
    this.calculateTotalPrice();

    this.applyRotation('-20deg', column); // Apply rotation after decreasing
  }

  private applyRotation(rotation: string, id: string) {
    const column = "." + id;
    this.renderer.setStyle(document.querySelector(column), 'transform', `rotateY(${rotation})`);
    setTimeout(() => {
      this.renderer.setStyle(document.querySelector(column), 'transform', 'rotateY(0deg)');
    }, 150);
  }

  getFormGroup(i: number, guestIndx: number): FormGroup {
    let formGroupIndex: number;
    const previousItemsCount = this.basketItems
      .slice(0, i)
      .reduce((total, item) => total + item.adultCount + item.childCount, 0);
    formGroupIndex = previousItemsCount + guestIndx;
    return this.guestForm[formGroupIndex];
  }

  guestFormValidationCheck(): boolean {
    let allValid: boolean = this.guestForm.every(formGroup => formGroup instanceof FormGroup && formGroup.valid);
    if (allValid) {
      let mainIndex = 0;
      for (let i = 0; i < this.basketItems.length; i++) {
        const element = this.basketItems[i];

        const indexStart = mainIndex + element.adultCount;
        const maxIndex = (mainIndex + element.adultCount + element.childCount);
        for (let index = mainIndex; index < maxIndex; index++) {
          mainIndex += 1
          const formItem = this.guestForm[index];
          const customer = (formItem.value as PmsTicketCustomerDetailDto)
          if (customer?.birthDate) {
            const birthDate = new Date(customer.birthDate);
            const today = new Date();

            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();

            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }

            if (index < indexStart) {
              if (age < element.maxChildAge) {
                allValid = false;
                const sweetAlertDto = new SweetAlertDto(
                  this.translate('sweetalert.error'),
                  element.remarkDisplay + this.translate('checkbirdthdateadult') + element.categoryDisplay + this.translate('checkpackageadult') +
                  element.maxChildAge.toString() + this.translate('checkagesmalleradult'),
                  SweetalertType.error
                );
                GlobalService.sweetAlert(sweetAlertDto);
                return false;
              }
            } else {
              if (age > element.maxChildAge) {
                allValid = false;
                const sweetAlertDto = new SweetAlertDto(
                  this.translate('sweetalert.error'),
                  element.remarkDisplay + this.translate('checkbirdthdate') + element.categoryDisplay +
                  this.translate('checkpackage') + element.maxChildAge.toString() + this.translate('checkagebigger'),
                  SweetalertType.error
                );
                GlobalService.sweetAlert(sweetAlertDto);
                return false;
              } else if (age < element.minChildAge) {
                allValid = false;
                const sweetAlertDto = new SweetAlertDto(
                  this.translate('sweetalert.error'),
                  element.remarkDisplay + this.translate('checkbirdthdate') + element.categoryDisplay +
                  this.translate('checkpackage') + element.minChildAge.toString() + this.translate('checkagesmaller'),
                  SweetalertType.error
                );
                GlobalService.sweetAlert(sweetAlertDto);
                return false;
              }
            }
          }
          // if (customer?.birthDate > element.maxChildAge) {
          //   allValid = false;
          //   const sweetAlertDto = new SweetAlertDto(
          //     this.translate('sweetalert.error'),
          //     'Lutfen Zorunlu Alanları Kontrol Ediniz!',
          //     SweetalertType.error
          //   );
          //   GlobalService.sweetAlert(sweetAlertDto);
          //   return;
          // }
        }
      };
    } else {
      const sweetAlertDto = new SweetAlertDto(
        this.translate('sweetalert.error'),
        this.translate('sweetalert.checkvalidation'),
        SweetalertType.error
      );
      GlobalService.sweetAlert(sweetAlertDto);
    }
    return allValid;
  }

  capitalizeFirstLetter(str: string): string {
    // return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const words = str.split(' ');

    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizedWords.join(' ');
  }

  generateRecId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getECollectionWithoutId(tenant: string): void {
    if (!this.isGuid(tenant)) {
      return;
    }
    const recId = {
      tenantId: tenant,
      propertyId: this.basketItems[0].propertyId
    };
    this._paymentService.getECollectionWithoutId(recId).subscribe((response) => {
      if (response.isSuccessful) {
        this.selectedECollections = response.data;
        this.setJsonValuesWithLangCode(this.selectedECollections)

        if (!this.selectedECollections.manageAccountAmount) {
          this.selectedPayOption = '1';
        }
        if (this.selectedECollections.selectedLanguageCode === undefined || this.selectedECollections.selectedLanguageCode === null) {
          this.selectedECollections.selectedLanguageCode = this.langCode;
        }

      } else {
      }
    });
  }
  isGuid(input: string): boolean {
    const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return guidRegex.test(input);
  }

  totalPricePerItem(item: any, column: string): number {
    let totalPrice = 0

    if (item.calculateType === 0) {
      item.totalPrice = ((item.childPrice ?? 0) * item.childCount) + (item.adultCount * (item.adultPrice ?? 0));
    } else {
      item.totalPrice = (item?.unitPrice ?? 1)
    }

    totalPrice = item.totalPrice;
    return totalPrice;
  }

  checkMale(basket: any, form: any[]): any[] {
    const results: string[] = [];
    if (basket.isMaleControl) {
      if (form.every(e => e.gender === Gender.male)) {
        results.push(basket.sessionId ?? '');
      }
    }
    return results;
  }

  changeInputValue(): void {
    this.isChecked = !this.isChecked;
  }

  openTermsandConditionDialog(num: number): any {
    const model = {
      type: num,
      data: this.termHtmlList,
      language: this.langCode
    }
    this._dialog.open(CustomTermsConditionsComponent, {
      panelClass: 'custom-terms',
      disableClose: false,
      data: model
    });
  }

  getActiveLang(): string {
    const langCode = this._translocoService.getActiveLang();

    if (typeof langCode === 'string') {
      this.langCode = langCode;
      return langCode;

    } else {
      return '';
    }
  }

  getPrivacyDocumentsByProperty(): void {
    const model = {
      propertyId: this.tokenInfo?.PropertyId
    }
    this._productService.getPrivacyDocumentsByProperty(model)
      .subscribe((response: ActionResponse<any>) => {
        if (response.isSuccessful) {
          this.termHtmlList = response.data;
        }
      });
  }

  parseOrDefault(input: any, langCode: any, defaultDisplay: any): string {
    try {
      const value = JSON.parse(input);
      if (!GlobalService.isNullOrEmpty(value)) {
        return value.find((x: { shortName: any }) => x.shortName === langCode)?.value ?? value[0].value;
      }
    } catch (error) {
    }
    return input;
  }
  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const valid = emailRegexp.test(control.value);
      return valid ? null : { invalidEmail: true };
    };
  }


  addExtras(extraId: string, basketItem: any): void {
    const item = this.basketItems.find(x => x.date === basketItem.date && x.itemRecId === basketItem.itemRecId);
    const extra = item.avaliableExtras.find((y: { recId: string; }) => y.recId === extraId);
    if (item && extra) {
      if (extra.count < 20) {
        extra.count += 1;
        // const extraPrice = extra.price * extra.count;
        // if (item.calculateType === 0) {
        //   item.totalPrice = extraPrice + (item.adultCount * item.adultPrice) + (item.childCount * item.childPrice);
        // } else {
        //   item.totalPrice = extraPrice + item.unitPrice;
        // }
        const index = item.extraServices.findIndex((x: { recId: string; }) => x.recId === extraId);
        if (index !== -1) {
          item.extraServices[index] = extra;
        } else {
          item.extraServices.push(extra);
        }
        this.calculateTotalPrice()
      }
    }
  }


  removeExtras(extraId: string, basketItem: any): void {
    const item = this.basketItems.find(x => x.date === basketItem.date && x.itemRecId === basketItem.itemRecId);
    const extra = item.avaliableExtras.find((y: { recId: string; }) => y.recId === extraId);
    if (item && extra) {
      if (extra.count !== 0) {
        extra.count -= 1;
        // const extraPrice = extra.price * extra.count;
        // if (item.calculateType === 0) {
        //   item.totalPrice = extraPrice + (item.adultCount * item.adultPrice) + (item.childCount * item.childPrice);
        // } else {
        //   item.totalPrice = extraPrice + item.unitPrice;
        // }
        const index = item.extraServices.findIndex((x: { recId: string; }) => x.recId === extraId);
        if (index !== -1) {
          if (extra.count === 0) {
            item.extraServices.splice(index, 1);
          } else {
            item.extraServices[index] = extra;
          }
        }
        this.calculateTotalPrice()
      }
    }
  }

  onPaymentExansionCheck(valueState: string) {

    if (valueState === 'opened') {
      this.newInstallment = [];

      this.resetCardPaymentForm();


      if (this.partialPaymentPanel?.expanded) {
        this.amountPaidInitial = parseFloat((this.totalPrice / 2).toFixed(2));
        //this.remainingAmount = this.totalPrice - this.amountPaidInitial
      }
    }
    if (!this.payInHotelPanel?.expanded) {
      const step3 = this.paymentForm as FormGroup;
      const controls = ['cardname', 'cardnumber', 'month', 'year', 'cvc'];

      controls.forEach(controlName => {
        const control = step3.get(controlName);
        if (!this.banktransferPanel?.expanded) {

          control?.setValidators([Validators.required]);
        } else {
          control?.clearValidators();
        }
        control?.updateValueAndValidity();
      });
    }
  }

  onValChange(value: any) {

    this.selectedPaymentTypeValue = value;
    if (this.selectedPaymentTypeValue === 'all') {

    }
  }

  partialAmountChange(e: any): void {

    const newValue = parseFloat(parseFloat(e.target.value).toFixed(2));
    if (newValue <= this.totalPrice && newValue !== 0) {
      this.amountPaidInitial = newValue;
      e.target.value = newValue;
      const cardNumber = this.paymentForm.value.cardnumber.toString();
      if (cardNumber.length >= 16) {
        this.getInstallmentOptions();
      }
    }
    else {
      e.target.value = this.amountPaidInitial;
    }
  }

  resetCardPaymentForm(): void {
    this.paymentForm.get('cardname')?.reset();
    this.paymentForm.get('cardnumber')?.reset();
    this.paymentForm.get('month')?.reset();
    this.paymentForm.get('year')?.reset();
    this.paymentForm.get('cvc')?.reset();
  }

  OnPayInHotelCheck(valueState: string) {

    if (valueState === 'opened') {
      this.resetCardPaymentForm();

      if (this.payInHotelPanel?.expanded) {
        const step3 = this.paymentForm as FormGroup;
        const controls = ['cardname', 'cardnumber', 'month', 'year', 'cvc'];
        controls.forEach(controlName => {
          const control = step3.get(controlName);
          if (!this.payInHotelPanel?.expanded) {

            control?.setValidators([Validators.required]);
          } else {
            control?.clearValidators();
          }
          control?.updateValueAndValidity();
        });
      }
    }
  }
  setJsonValuesWithLangCode(selectedECollections: ErpECollectionReviewDto): void {
    const defaultLanguage = this._translocoService.getActiveLang();
    if (defaultLanguage) {
      if (selectedECollections?.accountHolderList?.length > 0) {
        selectedECollections.accountHolder = selectedECollections.accountHolderList.find(i => i.shortName === defaultLanguage)?.value ?? ('No Translation For ' + defaultLanguage);
      }
      if (selectedECollections?.preWritingList?.length > 0) {
        selectedECollections.preWriting = selectedECollections.preWritingList.find(i => i.shortName === defaultLanguage)?.value ?? ('No Translation For ' + defaultLanguage);
      }
      if (selectedECollections?.maleControlRemarkList?.length > 0) {
        selectedECollections.maleControlRemark = selectedECollections.maleControlRemarkList.find(i => i.shortName === defaultLanguage)?.value ?? ('No Translation For ' + defaultLanguage);
      }
    }
  }

  onValueChangeCreditCard(e: any): void {
    const value = (this.paymentForm?.value.cardnumber).toString();
    if (value.length < 6) {
      this.cardBankName = null;
    }
    let check: boolean = false;
    if (value) {
      this.bin = null;
      const validRegex = /^[0-9]{16}$/;
      check = validRegex.test(value);
      if (value.length === 6) {
        this.getBankFromCardNumber();
      }
    }
    if (check) {
      this.getInstallmentOptions();
      // this.focusNextTabIndex(tabIndex);
    }
    // return e.value = e.value.replace(/\d(?=\d{4})/g, "*");

  }
  logSelectedInstallment(value: any) {

    console.log('Selected Installment:', value);
  }

  onSelectedInstallmentChange(e: any): void {

    this.selectedInstallment = e.value;
    const price = this.newInstallment[Number(e.value) - 1].value.value1;
    if (price && !this.partialPaymentPanel.expanded) {
      this.totalPrice = price;
      this.initialTotalPrice = this.totalPrice;

    }
  }
}
