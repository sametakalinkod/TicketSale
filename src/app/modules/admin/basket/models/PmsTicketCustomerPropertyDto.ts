export class PmsTicketCustomerPropertyDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    birthDate?: string | null;
    customerId?: string | null;
    customerPropertyId?: string | null;
    propertyDefinitionId?: string;
    isDefault?: boolean;
    isCustomer?: boolean;
    isNew?: boolean;
    isUpdated?: boolean;
    isDeleted?: boolean;
} 