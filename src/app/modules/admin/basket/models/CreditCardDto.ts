export class CreditCardDto {
    cardHolder: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
    cVV: string;
    creditCardType?: string | null | undefined;
    awardPermission?: number | null;

    constructor(
        cardHolder: string,
        cardNumber: string,
        expireMonth: string,
        expireYear: string,
        cVV: string,
        creditCardType?: string | null | undefined,
        awardPermission?: number | null

    ) {
        this.cardHolder = cardHolder;
        this.cardNumber = cardNumber;
        this.expireMonth = expireMonth;
        this.expireYear = expireYear;
        this.cVV = cVV;
        this.creditCardType = creditCardType;
        this.awardPermission = awardPermission;
    }
}
