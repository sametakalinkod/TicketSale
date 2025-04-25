import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { HttpService } from './Http.service';
import { adminEndPoints } from 'src/environments/adminEndPoints';
import { AuthUtils } from './auth.utils';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticated: boolean = false;
  private _CustomerAuthenticated: boolean = false;
  constructor(
    private _httpClient: HttpClient,
    private httpService: HttpService,
    private _userService: UserService
  ) { }


  set definitionCheck(value: boolean) {
    localStorage.setItem('definitionCheck', value.toString());
  }
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }


  signIn(credentials: { domain: string }, justDomain: boolean): Observable<any> {
    // Throw error, if the user is already logged in
    const token = localStorage.getItem('accessToken') ?? null;

    if (this._authenticated || token) {
      //return throwError('User is already logged in.');
      this.definitionCheck = false;
      return of('User is already logged in.');
    }
    if (justDomain) {
      localStorage.removeItem('routerpurp');
    }

    return this.httpService.signIn(adminEndPoints.auth.signIn, credentials.domain).pipe(
      switchMap(async (response: any) => {
        debugger
        localStorage.removeItem('accessToken');
        localStorage.removeItem('defaultLanguages');
        localStorage.removeItem('enterprise');
        localStorage.removeItem('activeLang');
        localStorage.removeItem('basketEvents');
        localStorage.removeItem('companyFactSheetDef');
        this.accessToken = response.access_token;
        this.definitionCheck = true;
        this._authenticated = true;
        return of(response);
      })
    );
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }

    return false;
  }

  signInUsingToken(): Observable<any> {
    return this._httpClient
      .post(adminEndPoints.auth.signInUsingToken, {
        accessToken: this.accessToken,
      })
      .pipe(
        catchError(() =>
          of(false)
        ),
        switchMap((response: any) => {
          console.log(response.accessToken);
          this.accessToken = response.accessToken;

          this._authenticated = true;


          return of(true);
        })
      );
  }

  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
  }

  /**
     * Sign up
     *
     * @param user
     */
  signUp(user: {
    name: string;
    email: string;
    password: string;
    company: string;
  }): Observable<any> {
    const path = adminEndPoints.auth.signUp;
    const newUser = {
      userName: user.email,
      email: user.email,
      password: user.password,
      companyId: user.company,
    };
    return this.httpService.signUp(path, newUser);
  }


  check(): Observable<boolean> {
    console.log(this._authenticated);
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }

    // If the access token exists and it didn't expire, sign in using it
    return this.signInUsingToken();
  }


  signInWithPropId(credentials: { domain: string, propertyId: string }): Observable<any> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      return throwError('User is already logged in.');
    }

    return this.httpService.signInWithPropId(adminEndPoints.auth.signIn, credentials.domain, credentials.propertyId).pipe(
      switchMap(async (response: any) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('defaultLanguages');
        localStorage.removeItem('enterprise');
        localStorage.removeItem('activeLang');
        // Store the access token in the local storage
        this.accessToken = response.access_token;

        // Set the authenticated flag to true
        this._authenticated = true;

        // Store the user on the user service
        this._userService.user = response.user;

        // Return a new observable with the response
        return of(response);
      })
    );
  }
}
