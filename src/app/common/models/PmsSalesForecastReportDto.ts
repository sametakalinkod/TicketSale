import { LanguageListDto } from "./languageListDto";

export class PmsSalesForecastReportDto {
    id?: number;
    remark?: string;
    date?: Date;
    seans?: string;
    capacity?: number;
    capacityWeb?: number;
    sold?: number;
    remainder: number = 0;
    detailRemark?: string;
    programDetailId?: string;
    productId?: string;
    displayDate?: string;
    curr?: string;
    ticketPrice?: number | null;
    childTicketPrice?: number | null;
    sunday?: boolean | null;
    monday?: boolean | null;
    tuesday?: boolean | null;
    wednesday?: boolean | null;
    thursday?: boolean | null;
    friday?: boolean | null;
    saturday?: boolean | null;
    seanceBegin?: string;
    seanceBeginDisplay?: string;
    seanceEnd?: TimeOnly;
    imageList: string[] = [];
    currAdultPrice?: number;
    currChildPrice?: number;
    currUnitPrice?: number;
    maxChildAge?: number;
    minChildAge?: number;
    calculateType?: number;
    maxPax?: number;
    minPax?: number;
    packagesHtml?: string;
    currentHtml?: string;
    htmls: LanguageListDto[] = [];
    isActive?: boolean;
    onAir?: boolean;
    routeLink?: string;
    htmlCommonId?: string;
    ismalecontrol?: string;
    detailRemarkDisplay?: string;
    remarkDisplay?: string;
    freeFemaleCustomer?: boolean;
}

export class TimeOnly {
    hours?: number;
    minutes?: number;
    seconds?: number;
}
