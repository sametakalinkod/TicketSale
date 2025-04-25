export class GuestInfoDto {
    customerId?: string;
    gender: number = 0;
    name: string = '';
    surname: string = '';
    birthDate: Date = new Date();
    countryId?: string;
    enterpriseId?: string;
    firstName?: string;
    lastName?: string;
}
