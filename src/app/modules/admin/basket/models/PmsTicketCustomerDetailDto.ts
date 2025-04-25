import { PmsTicketCustomerPropertyDto } from "./PmsTicketCustomerPropertyDto";

export class PmsTicketCustomerDetailDto {
    recId?: string;
    ticketOwnerId?: string;
    customerId?: string | null;
    name?: string;
    surName?: string;
    gender?: number;
    birthDate?: string | null;
    email?: string;
    selected: boolean = false;
    phone?: string;
    remark?: string;
    produceId?: string;
    countryId?: string | null;
    customerProperties?: PmsTicketCustomerPropertyDto[];
} 