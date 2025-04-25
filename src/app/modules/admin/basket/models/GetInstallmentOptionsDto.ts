export class GetInstallmentOptionsDto {
    bin: string;
    propertyId: string;
    amount?: number;
    selectedVirtualPosId: string;
    ecollectionId: string | null;
    tenantId!: string | null;
    paymentType?: number = 1;
    constructor(
        bin: string,
        propertyId: string,
        amount: number | undefined,
        selectedVirtualPosId: string,
        ecollectionId: string | null,
        tenantId: string | null,
        paymentType?: number,
    ) {
        this.bin = bin;
        this.propertyId = propertyId;
        this.amount = amount;
        this.selectedVirtualPosId = selectedVirtualPosId;
        this.ecollectionId = ecollectionId;
        this.tenantId = tenantId;
        this.paymentType = paymentType;
    }
}
