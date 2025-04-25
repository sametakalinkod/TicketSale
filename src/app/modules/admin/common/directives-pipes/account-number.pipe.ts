import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumberFormat'
})
export class AccountNumberFormatPipe implements PipeTransform {
  transform(accountNumber: string): string {
    if (!accountNumber) {
      return '';
    }

    // Assuming the account number has a fixed format of 26 characters
    const formattedAccountNumber = accountNumber.replace(/(.{4})/g, '$1 ').trim();

    return formattedAccountNumber;
  }
}
