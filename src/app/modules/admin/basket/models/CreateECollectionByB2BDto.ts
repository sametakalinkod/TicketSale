export class CreateECollectionByB2BDto {
    recId: string;
    propertyId: string;
    eCollectionPacketType: number;
    email: string;
    amount: number;
    currency: string;
    rate: number;
    fullName: string;
    eCollectionEndType: number;
    endDate: Date;
    endtime: string | null;
    selectedVirtualPosId: string | null;
    selectedLanguageCode: number | null;
    payeeNote: string;
    createdterminal: string;
    createdfromid: number;
    createdBy: string;
    paymentType: number;
    constructor(
        recId: string,
        propertyId: string,
        eCollectionPacketType: number,
        email: string,
        amount: number,
        currency: string,
        rate: number,
        fullName: string,
        eCollectionEndType: number,
        endDate: Date,
        endtime: string | null,
        selectedVirtualPosId: string | null,
        selectedLanguageCode: number | null,
        payeeNote: string,
        createdterminal: string,
        createdfromid: number,
        createdBy: string,
        paymentType: number
    ) {
        this.recId = recId;
        this.propertyId = propertyId;
        this.eCollectionPacketType = eCollectionPacketType;
        this.email = email;
        this.amount = amount;
        this.currency = currency;
        this.rate = rate;
        this.fullName = fullName;
        this.eCollectionEndType = eCollectionEndType;
        this.endDate = endDate;
        this.endtime = endtime;
        this.selectedVirtualPosId = selectedVirtualPosId;
        this.selectedLanguageCode = selectedLanguageCode;
        this.payeeNote = payeeNote;
        this.createdterminal = createdterminal;
        this.createdfromid = createdfromid;
        this.createdBy = createdBy;
        this.paymentType = paymentType;
    }
}

