
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ActionResponse } from '../../models/ActionResponse';
import { environment } from 'src/environments/environment';
import { adminEndPoints } from 'src/environments/adminEndPoints';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root',
})
export class HttpService {
    apiAddress: string = environment.apiUrl;
    //  identityAddress: string = environment.identityUrl + '';
    constructor(
        private httpClient: HttpClient,
        private _router: Router
    ) { }

    get(url: string): Promise<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient.get(fullUrl).toPromise().catch(error => this.handleError(error));
    }


    private handleError(error: any): Observable<never> {
        if (error.status === 401) {
            localStorage.removeItem('accessToken');
            this._router.navigate(['/delphinaquaserenity']).then(() => {
                window.location.reload();
            });
        }
        return throwError(error);
    }


    post(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        const token = localStorage.getItem('accessToken') ?? null;

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });

        if (token) {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });

            return this.httpClient.post(fullUrl, body, { headers }).pipe(
                map((response: any) => {
                    return response;
                }),
                catchError((error: any) => {
                    if (error.status === 401) {

                        localStorage.removeItem('accessToken');
                        this._router.navigate(['/delphinaquaserenity']);
                        window.location.reload();
                        return error;
                    }
                    // For other errors, propagate the error to the subscriber
                    return error;
                })
            );
        } else {
            // If token is not present, make the request without Authorization header

        }

        return this.httpClient.post(fullUrl, body, { headers }).pipe(
            catchError(async (error: any) => {
                if (error.status === 401) {

                    localStorage.removeItem('accessToken');
                    const signIn = await this.signIn(adminEndPoints.auth.signIn, window.location.origin.toLowerCase());
                    this._router.navigate(['/delphinaquaserenity']);

                    return error;
                }
                // For other errors, propagate the error to the subscriber
                return error;
            })
        );
    }

    // post(url: string, body: any): Observable<any> {
    //       
    //     const fullUrl: string = this.apiAddress + url;

    //     const token = localStorage.getItem('accessToken') ?? null;


    //     if (token) {
    //         const headers = new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         });

    //         return this.httpClient.post(fullUrl, body, { headers }).pipe(
    //             map((response: any) => {
    //                   
    //                 return response;
    //             })
    //         );
    //     } else {
    //         return this.httpClient
    //             .post<Promise<any>>(fullUrl, body);
    //     }
    // }
    run<T>(url: string, body: any, options?: object): Observable<ActionResponse<T>> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient.post<ActionResponse<T>>(fullUrl, body, options);

    }
    delete(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: body
        };
        return this.httpClient.delete<Promise<any>>(fullUrl, options);
    }

    put(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient
            .put<Promise<any>>(fullUrl, body);

    }


    signUp(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient
            .post<Promise<any>>(fullUrl, body);

    }

    signIn(url: string, domain: string): Observable<any> {

        const body = new HttpParams()
            .set('grant_type', 'delegation')
            // .set('username', model.userName)
            // .set('password', model.password)
            .set("domain", domain)
            .set('client_id', 'onlinereservation')
            // .set('scope', model.scope)
            .set('client_secret', 'secret');

        const fullUrl: string = this.apiAddress + url;

        return this.httpClient.post<any>(fullUrl,
            body.toString(),
            { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });



    }
    useRefreshToken(url: string, refreshToken: string): Observable<any> {

        const body = new HttpParams()
            .set('grant_type', 'refresh_token')
            .set('client_id', 'adminclient')
            .set('client_secret', 'secret')
            .set('refresh_token', refreshToken);

        const fullUrl: string = this.apiAddress + url;

        return this.httpClient.post<any>(fullUrl, body.toString(), {
            headers: new HttpHeaders().set(
                'Content-Type',
                'application/x-www-form-urlencoded'
            ),
        });
    }
    getRequest(url: string): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient
            .get(fullUrl);
    }

    signInWithPropId(url: string, domain: string, propertyId: string): Observable<any> {

        const body = new HttpParams()
            .set('grant_type', 'delegation')
            // .set('username', model.userName)
            // .set('password', model.password)
            .set("domain", domain)
            .set("property_id", propertyId)
            .set('client_id', 'onlinereservation')
            // .set('scope', model.scope)
            .set('client_secret', 'secret');

        const fullUrl: string = this.apiAddress + url;

        return this.httpClient.post<any>(fullUrl,
            body.toString(),
            { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });



    }



}
