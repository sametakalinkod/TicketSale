import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private cookieChangeEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }



  getCookie(name: string): string | null {
    // const cookieName = name + "=";
    // const cookies = document.cookie.split(';');



    // for (const cookie of cookies) {
    //   let trimmedCookie = cookie.trim();

    //   if (trimmedCookie.indexOf(cookieName) == 0) {
    //     console.log(trimmedCookie.substring(cookieName.length, trimmedCookie.length));

    //     return trimmedCookie.substring(cookieName.length, trimmedCookie.length);
    //   }
    // }

    // return null;

    const item = localStorage.getItem(name);
    if (item !== null) {
      console.log(item);
      return item;
    }
    return null;
  }

  setCookie(name: string, value: string, hours: number): void {
    // const date = new Date();
    // // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    // date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    // const expires = 'expires=' + date.toUTCString();
    // document.cookie = name + '=' + value + '; ' + expires + '; path=/';
    localStorage.setItem(name, value);


    // Notify subscribers about the cookie change
    this.cookieChangeEmitter.emit(value);
  }

  subscribeToCookieChanges(): EventEmitter<string> {
    return this.cookieChangeEmitter;
  }
  deleteCookie(name: string) {
    // document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.removeItem(name);

    this.cookieChangeEmitter.emit();

  }



  checkCookie(name: string): boolean {
    // const cookieName = name + "=";
    // const cookies = document.cookie.split(';');



    // for (const cookie of cookies) {
    //   let trimmedCookie = cookie.trim();

    //   if (trimmedCookie.indexOf(cookieName) == 0) {
    //     console.log(trimmedCookie.substring(cookieName.length, trimmedCookie.length));

    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    // return false;

    const item = localStorage.getItem(name);
    if (item !== null) {
      console.log(item);
      return true;
    } else {
      return false;
    }
  }
}
