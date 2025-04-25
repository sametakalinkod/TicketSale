export class InstallmentTableDto {
    campaign!: string;
    default!: boolean;
    installments!: { [key: number]: number };
}

