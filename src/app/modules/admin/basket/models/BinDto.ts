export class BinDto {
    bIN!: string;
    bankCode!: string;
    bankName!: string;
    cardType!: string;
    organization!: string;
    alias!: string;
    awardPermission!: number;
    installmentPermission: boolean = false;
    countryCode!: string;
}
