import { Injectable } from '@angular/core';
import { Store } from '../models/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StoreService } from '../services/store.service';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../services/alertify.service';


@Injectable()
export class StoreListResolver implements Resolve<Store[]> {

    constructor(private storeService: StoreService,
                private alertify: AlertifyService,
                private route: Router) {}
    resolve(): Observable<Store[]> {
        return this.storeService.getStoresByOwner().pipe(
            catchError((error) => {
                console.log(error);
                this.alertify.error('Problem fetching data.');
                return of(null);
            })
        );
    }
}
@Injectable()
export class StoreInfoResolver implements Resolve<Store> {
    constructor(private storeService: StoreService,
                private alertify: AlertifyService,
                private route: Router) {}
                resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Store> {
                    return this.storeService.getStoreById(activatedRouteSnapshot.params.id).pipe(
                        catchError((error) => {
                            console.log(error);
                            this.alertify.error('Problem fetching data.');
                            return of(null);
                        })
                    );
                }
}
