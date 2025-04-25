import { SweetalertType } from "../enums/SweetalertType.enum";

export class SweetAlertDto {
    title: string;
    text: string;
    icon: SweetalertType;

    constructor(title: string, text: string, icon: SweetalertType) {
        this.title = title;
        this.text = text;
        this.icon = icon;
    }
}

