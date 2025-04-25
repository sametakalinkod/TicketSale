import { CustomerInvoiceAddressForGuestDto } from "./CustomerInvoiceAddressForGuestDto";
import { PmsTicketCustomerDetailDto } from "./PmsTicketCustomerDetailDto";
import { PmsTicketCustomerPropertyDto } from "./PmsTicketCustomerPropertyDto";
import { PmsTicketExtraProgramDto } from "./PmsTicketExtraProgramDto";
import { PmsTicketOwnerRequestDto } from "./PmsTicketOwnerRequestDto";

export class TicketSaleDto {
    ticketCustomerDetails?: PmsTicketCustomerDetailDto[];
    ticketExtraProgram?: PmsTicketExtraProgramDto[];
    ownerTicketList?: PmsTicketOwnerRequestDto[];
    customerProperties?: PmsTicketCustomerPropertyDto[];
    customerInvoiceAddress?: CustomerInvoiceAddressForGuestDto[];
    initialPaymentId?: string;
} 