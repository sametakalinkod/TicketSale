import { PaymentModelByB2B } from "./PaymentModelByB2B";
import { TicketSaleDto } from "./TicketSaleDto";
import { CreateECollectionByB2BDto } from "./CreateECollectionByB2BDto";


export class CreatePaymentByTickerModel {
    paymentModel?: PaymentModelByB2B;
    createECollection?: CreateECollectionByB2BDto;
    ticketBuyModel?: TicketSaleDto;
} 