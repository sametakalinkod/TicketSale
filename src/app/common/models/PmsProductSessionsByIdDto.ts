import { PmsExtraProgramDefinitionsDto } from "./PmsExtraProgramDefinitionsDto";
import { PmsSalesForecastReportDto } from "./PmsSalesForecastReportDto";

export class PmsProductSessionsByIdDto {
    recId?: string;
    programEndDate?: Date;
    programName?: string;
    imageJson?: string;
    htmlList?: string;
    propertyId?: string;
    imageList: string[] = [];
    closeSaleType?: number;
    routeLink?: string;
    programNameDisplay?: string;
    sessions: PmsSalesForecastReportDto[] = [];
    extraProgram: PmsExtraProgramDefinitionsDto[] = [];
} 