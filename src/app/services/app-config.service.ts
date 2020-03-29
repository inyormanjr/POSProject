import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  // This is an example property ... you can make it however you want.
  get authConfig(): AuthConfig {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.identityServer;
  }
}
