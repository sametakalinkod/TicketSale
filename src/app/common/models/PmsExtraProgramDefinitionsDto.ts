export class PmsExtraProgramDefinitionsDto {
    recId?: string;
    code?: string;
    name?: string;
    price?: number | null;
    currencyId?: string;
    currencyName?: string;
    departmentId?: string | null;
    taxesId?: string | null;
    propertyId?: string;
    htmlList?: string;
    symbol?: string;
    imageList?: string[];
    programId?: string;
    count?: number = 0;
    nameDisplay?: string;
    basketExtend?: boolean;
}  