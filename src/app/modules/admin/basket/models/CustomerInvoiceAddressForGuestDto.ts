export class CustomerInvoiceAddressForGuestDto {
    recId?: string;
    customerId?: string;
    invoiceName?: string;
    companyTitle?: string;
    taxOffice?: string;
    taxNumber?: string;
    address?: string;
    email?: string;
    description?: string;
    default?: boolean;
    isInvoiceMember?: boolean;
    isNew?: boolean | null;
    isUpdated?: boolean | null;
    isDeleted?: boolean | null;
} 
