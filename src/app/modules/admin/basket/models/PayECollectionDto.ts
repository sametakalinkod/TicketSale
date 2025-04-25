import { CreditCardDto } from './CreditCardDto';

export class PayECollectionDto {
    creditCard: CreditCardDto;
    amount: number;
    currency: string;
    bank: string;
    installment: string;
    virtualPosId: string | null;
    ecollectionId: string;
    propertyId: string;
    tenantId: string;
    returnUrl: string = window.location.origin.toLowerCase();
    isB2BAccount?: boolean = false;
    pmsEmail?: string | null;
    contactMail?: string;
    amountChange?: number | null;
    constructor(
        creditCard: CreditCardDto,
        amount: number,
        currency: string,
        bank: string,
        installment: string,
        virtualPosId: string | null,
        ecollectionId: string,
        propertyId: string,
        tenantId: string,
        isB2BAccount?: boolean,
        pmsEmail?: string | null,
        contactMail?: string,
        amountChange?: number | null,
    ) {
        this.creditCard = creditCard;
        this.amount = amount;
        this.currency = currency;
        this.bank = bank;
        this.installment = installment;
        this.virtualPosId = virtualPosId;
        this.ecollectionId = ecollectionId;
        this.propertyId = propertyId;
        this.tenantId = tenantId;
        this.isB2BAccount = isB2BAccount;
        this.pmsEmail = pmsEmail;
        this.contactMail = contactMail;
        this.amountChange = amountChange;
    }
}
