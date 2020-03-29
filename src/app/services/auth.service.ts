import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { map } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 authURL = environment.authApi;
 claims: any;
 token = null;
  constructor(private http: HttpClient, private oauthService: OAuthService, private appConfigService: AppConfigService) {
    this.oauthService.configure(this.appConfigService.authConfig);
  }

  login(model: any): any {
    
    this.oauthService.fetchTokenUsingPasswordFlow(model.username, model.password).then(() => {
         const token = this.oauthService.getAccessToken();
         localStorage.setItem('token', token);
         console.log(token);
       }).then(() => {
         console.log(this.oauthService);
         this.claims = this.oauthService.getIdentityClaims();
         if (this.claims) {
          console.log(this.claims.given_name);
        }
       });
    return true;
  }
}
