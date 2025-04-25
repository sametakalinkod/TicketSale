import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExstraServiceModelDto } from 'src/app/common/models/ExstraServiceModelDto';
import { PmsProductSessionsByIdDto } from 'src/app/common/models/PmsProductSessionsByIdDto';
import { CookieService } from 'src/app/core/services/global/cookie.service';

@Component({
  selector: 'app-event-details-basket',
  templateUrl: './event-details-basket.component.html',
  styleUrls: ['./event-details-basket.component.scss']
})
export class EventDetailsBasketComponent implements OnInit {
  selectedProductData: PmsProductSessionsByIdDto = new PmsProductSessionsByIdDto();
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6];
  adultCount = '1';
  childCount = '1';
  extraServices: ExstraServiceModelDto[] = [];
  extraServiceModelDtoArray: ExstraServiceModelDto[] = [];
  totalPrice: number = 0;
  constructor(
    private _dialogRef: MatDialogRef<any>,
    private _cookieService: CookieService,

    @Inject(MAT_DIALOG_DATA) public data: PmsProductSessionsByIdDto

  ) {
    this.selectedProductData = data;
  }

  ngOnInit() {
    console.log(this.selectedProductData)
  }

  onQuantityChange(selectedValue: any): void {

  }

  addExtraService(): void {
    this.extraServices.push(new ExstraServiceModelDto())
  }

  approveService(item: ExstraServiceModelDto): void {
    const id = this.extraServiceModelDtoArray.reduce((maxId, currentItem) => {
      return currentItem.id && currentItem.id > maxId ? currentItem.id : maxId;
    }, 0);

    item.id = id + 1;
    //isism id ile degisicek
    const service = this.selectedProductData?.extraProgram?.find(service => service.name === this.extraServices[0].serviceId) ?? null;


    item.price = (service?.price ?? 0) * item.count;
    item.currency = service?.symbol;
    this.extraServiceModelDtoArray.push(item)
    this.extraServices = [];

  }
  decrementValue(item: ExstraServiceModelDto): void {
    if (this.extraServices[0].count === 1) {
      return;
    }
    this.extraServices[0].count -= 1;
  }
  incrementValue(item: ExstraServiceModelDto): void {
    this.extraServices[0].count += 1;
  }

  removeRecord(item: ExstraServiceModelDto): void {
    const index = this.extraServiceModelDtoArray.indexOf(item);
    if (index !== -1) {
      this.extraServiceModelDtoArray.splice(index, 1);
    }
  }

  getServiceName(serviceId?: string): string | undefined {
    const service = this.selectedProductData?.extraProgram?.find(service => service.recId === serviceId) ?? null;
    return service ? service.name : 'Unknown';
  }

  getPriceName(item: ExstraServiceModelDto): string | undefined {
    const service = (item?.price ?? '') + (item?.currency ?? '');
    return service ? service : 'Unknown';
  }


  getTotalPrice(): string {
    this.totalPrice = this.extraServiceModelDtoArray.reduce((total, currentItem) => {
      return total + (currentItem.price || 0); // Add the price of the current item to the total
    }, 0);


    const price = this.selectedProductData.sessions[0].ticketPrice ?? 0
    this.totalPrice += price * Number(this.adultCount);
    return this.totalPrice.toString();
  }


  closeDialog(): void {
    this._dialogRef.close({ status: null });
  }

  addBasket(): void {
    const cookie = this._cookieService.getCookie('basketEvents');
    const rmeinder = ((this.selectedProductData?.sessions[0]?.capacityWeb ?? 0) - (this.selectedProductData?.sessions[0]?.sold ?? 0)) ?? 0;
    const model = [{
      sessionId: this.selectedProductData?.sessions[0].programDetailId,
      image: this.selectedProductData.imageList[0],
      date: this.selectedProductData?.programEndDate,
      sessionTime: this.selectedProductData?.sessions[0].seanceBegin,
      childPrice: this.selectedProductData?.sessions[0].childTicketPrice,
      adultPrice: this.selectedProductData?.sessions[0].ticketPrice,
      adultCount: this.adultCount,
      title: this.selectedProductData?.sessions[0].remark,
      totalPrice: this.totalPrice,
      extraServices: this.extraServiceModelDtoArray,
      reminder: rmeinder
    }];

    if (cookie) {
      const json = JSON.parse(cookie);
      model.push(...json)
    }
    this._cookieService.setCookie("basketEvents", JSON.stringify(model), 7);
    this._dialogRef.close({ status: true });

  }
}
