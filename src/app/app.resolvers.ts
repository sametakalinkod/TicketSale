import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { StorageDto } from './core/models/localStorage/storageDto';
import { AuthService } from './core/services/auth/auth.service';
import { CompanyInfoService } from './core/services/company/CompanyInfo.service';
import { CookieService } from './core/services/global/cookie.service';
import { GlobalService } from './core/services/global/global.service';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any> {
    subDomain: string;
    constructor(private _authService: AuthService,
        private _companyService: CompanyInfoService,
        private router: Router,
        private _cookieService: CookieService,
        private _translocoService: TranslocoService
        //private _translocoService: TranslocoService,
    ) {
        this.subDomain = window.location.origin.toLowerCase();
    }
    /**
    * Use this resolver to resolve initial mock-api for the application
    *
    * @param route
    * @param state
    */
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const router = localStorage.getItem('routerpurp') ?? null;

        await this.signIn(this.subDomain, router);
        await this.getHotelDef();
        // return forkJoin([
        //     this.signIn(this.subDomain),
        //     this.getHotelDef()
        // ])
        // if (router && !GlobalService.isNullOrEmpty(router)) {
        //     debugger

        //     const routeIndex = this.router.config.findIndex(r => r.path === 'home');
        //     if (routeIndex !== -1) {
        //         const newRoutes: Routes = [
        //             { path: '', redirectTo: router, pathMatch: 'full' },
        //             { path: router, component: InitialAppComponent },
        //             { path: 'eventdetails', component: EventDetailsComponent },
        //             { path: 'payment', component: EventPaymentComponent },
        //             { path: '**', redirectTo: router }
        //         ];

        //         this.router.resetConfig(newRoutes);


        //         this.router.config[routeIndex].path = router;
        //         this.router.navigate(['/' + router]);
        //     }
        // }
        if (router && !GlobalService.isNullOrEmpty(router)) {
            debugger
            // const updatedRoutes = this.router.config.map((r) => {
            //     // if (r.redirectTo === '/home') {
            //     //     return { ...r, redirectTo: '/' + router };

            //     // }
            //     // Change the 'home' path to the new dynamic route name (e.g., 'aqua')
            //     if (r.path === 'home') {
            //         return { ...r, path: router };
            //     }

            //     // Update default redirect to use the new route
            //     if (r.path === '') {
            //         return { ...r, redirectTo: router };
            //     }

            //     // Update wildcard redirect to use the new route
            //     if (r.path === '**') {
            //         return { ...r, redirectTo: router };
            //     }

            //     return r; // leave all other routes unchanged
            // });
            // console.log('initial', this.router.config);

            // this.router.resetConfig(updatedRoutes);
            // console.log('updatedRoutes', this.router.config);

            // this.router.navigate(['/' + router]);
            const updatedRoutes: Routes = this.router.config.map((r): Route => {
                if (r.redirectTo === '/delphinaquaserenity') {
                    return {
                        path: r.path || '',
                        redirectTo: '/' + router,
                        pathMatch: (r.pathMatch as 'prefix' | 'full') ?? 'full'
                    };
                }

                if (r.path === '') {
                    return {
                        path: '',
                        redirectTo: router,
                        pathMatch: 'full'
                    };
                }

                if (r.path === '**') {
                    return {
                        path: '**',
                        redirectTo: router
                    };
                }

                if (r.path === 'delphinaquaserenity') {
                    return {
                        ...r,
                        path: router
                    };
                }

                return r;
            });

            console.log('initial', this.router.config);


            this.router.resetConfig(updatedRoutes);
            console.log('updatedRoutes', this.router.config);

            const currentRoute = this.router.url;
            console.log('currentRoute', currentRoute);

            if (!(currentRoute === '/' || currentRoute === '/delphinaquaserenity')) {
                this.router.navigate([currentRoute]);
            }

        }

    }

    async signIn(domain: string, route?: string | null): Promise<any> {
        let justDomain: boolean = false;
        const model = {
            domain: domain
        }


        if (!GlobalService.isNullOrEmpty(route)) {
            model.domain = model.domain + '/' + route;
            justDomain = true;
        }

        return this._authService.signIn(model, justDomain).toPromise();
    }

    async getHotelDef(): Promise<any> {
        // Throw error, if the user is already logged in

        const definitionCheck = localStorage.getItem('definitionCheck') ?? null;

        if (definitionCheck == 'false') {
            return ('User is already logged in.');
        }
        const tokenInfo: StorageDto = GlobalService.tokenInfo() as StorageDto;
        const model = {
            CompanyId: tokenInfo.PropertyId,
            TenantId: tokenInfo.TenantId,
            DomainType: Number(tokenInfo.DomainType)
        }

        return this._companyService.getPmsTicketDefination(model).toPromise().then((res) => {
            localStorage.setItem('definitionCheck', 'false');

            if (res.isSuccessful && localStorage.getItem("companyFactSheetDef")) {
                localStorage.removeItem("companyFactSheetDef");
            }
            localStorage.setItem("companyFactSheetDef", JSON.stringify(res.data));

            const language = (res.data?.languageCode && res.data?.languageCode != '-') ? res.data?.languageCode.toLowerCase() : 'en';
            this._translocoService.setActiveLang(language);
            localStorage.setItem('activeLang', language);
        });
    }
}