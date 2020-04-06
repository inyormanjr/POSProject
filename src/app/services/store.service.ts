import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  Observable } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient) { }

  getStoresByOwner(): Observable<Store[]> {
    return this.http.get<Store[]>(`${environment.storeApiUrl}/store/api/store`);
  }

  saveNewStore(store: Store) {
    return this.http.post<Store>(`${environment.storeApiUrl}/store/api/store`, store);
  }
}
