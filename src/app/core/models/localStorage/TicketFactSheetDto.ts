import { CrmLanguagesListDto } from "../common/CrmLanguagesListDto";

export class TicketFactSheetDto {
    recId?: string;
    name?: string;
    mapAddress?: string;
    memberAndPromotionUsage?: boolean;
    imagesList?: string;
    companyId?: string | null;
    countryCode?: string;
    languageCode?: string;
    companyFaviconUrl?: string;
    activeLanguages?: CrmLanguagesListDto[];
    isPayOnGate?: boolean;
    isPayWithCreditCard?: boolean;
    isPayWithBankTransfer?: boolean;
    isPrePaymentActive?: boolean;
    isMultipleCardPaymentActive?: boolean;
    prePaymentRatio?: number;
    backGroundColor: string = '';
    routeByLogoUrl: string = '';
    themeColor?: string;
    backgroundColor?: string;
    headerColor?: string;
    headerBackgroundColor?: string;
    fontColor?: string;
    // componentBackGround?: string;
    themeBackgroundImage?: string;
    ticketItemBackgroundColor?: string;
    ticketItemColor?: string;
    buttonBackgroundColor?: string;
    subPageBackgroundColor?: string;
    eventDetBackgroundColor?: string;
    eventDetFontColor?: string;
    eventItemBackgroundColor?: string;
    buttonBorderColor?: string;

    propertyPhone?: string;

    facebookUrl?: string;
    instagramUrl?: string;
    whatsappUrl?: string;
    telegramUrl?: string;

    homePageDisplayType?: number;
    companyLogoUrl?: string;
} 
