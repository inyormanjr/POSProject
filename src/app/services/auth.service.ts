import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { map } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
import { AppConfigService } from './app-config.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
jwtHelper: JwtHelperService = new JwtHelperService();
 authURL = environment.authApi;
 decodedToken: [];
 claims: any;
 token = null;
  constructor(private alertify: AlertifyService,private oauthService: OAuthService, private appConfigService: AppConfigService) {
    this.oauthService.configure(this.appConfigService.authConfig);
  }

  login(model: any): any {
   return this.oauthService.fetchTokenUsingPasswordFlow(model.username, model.password).then(() => {
         const token = this.oauthService.getAccessToken();
         localStorage.setItem('token', token);
         this.token = token;
         this.decodedToken = this.jwtHelper.decodeToken(token);
       }, error => {
          this.alertify.error(error);
       });
  }
}


