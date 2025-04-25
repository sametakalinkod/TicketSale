import { CreditCardDto } from "./CreditCardDto";

export class PaymentModelByB2B {
    creditCard?: CreditCardDto;
    amount?: number;
    currency?: string;
    bank?: string;
    installment?: string | null;
    virtualPosId?: string | null;
    ecollectionId?: string;
    propertyId?: string;
    tenantId?: string;
    returnUrl?: string;
    pmsEmail?: string | null;
    contactMail?: string | null;
}