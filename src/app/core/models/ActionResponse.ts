export enum ResponseType {
    ok = 1,
    warning = 2,
    error = 3
}

export class ActionResponse<T> {
    data!: T;
    statusCode!: number;
    isSuccessful: boolean = false;
    errors: string[] = [];
    message!: string;
    responseType: ResponseType = 1;
}
