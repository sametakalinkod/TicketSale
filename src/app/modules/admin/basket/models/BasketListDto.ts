export class BasketListDto {
    category: string = '';
    sessionId: string = '';
    itemRecId?: string;
    image?: string;
    date?: Date;
    sessionTime?: string;
    childPrice?: number;
    adultPrice?: number;
    adultCount?: number;
    childCount?: number;
    title?: string;
    totalPrice?: number;
    extraServices: any[] = [];
    total?: number;
    remark?: string;
}
