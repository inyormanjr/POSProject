import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { map } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
jwtHelper: JwtHelperService = new JwtHelperService();
 authURL = environment.authApi;
 decodedToken: [];
 claims: any;
 token = null;
 authCodeFlowConfig: AuthConfig = {
   issuer: 'https://yespos.azurewebsites.net/identity',
   redirectUri: '',
   clientId: 'client',
   responseType: 'id_token token',
   scope: 'storeapi',
   tokenEndpoint: 'https://yespos.azurewebsites.net/identity/connect/token',
   showDebugInformation: true,
   requireHttps: false,
   dummyClientSecret: '511536EF-F270-4058-80CA-1C89C192F69A'
 };

  constructor(private oauthService: OAuthService, private alertify: AlertifyService) {
    this.oauthService.configure(this.authCodeFlowConfig);
  }

  login(model: any) {
    const httpHeader = new HttpHeaders().append('Authorization', 'Basic Y2xpZW50OjUxMTUzNkVGLUYyNzAtNDA1OC04MENBLTFDODlDMTkyRjY5QQ==');
    return this.oauthService.fetchTokenUsingPasswordFlow(model.username, model.password, httpHeader).then(() => {
         const token = this.oauthService.getAccessToken();
         localStorage.setItem('token', token);
         this.token = token;
         this.decodedToken = this.jwtHelper.decodeToken(token);
       }, error => {
          this.alertify.error(error);
       });
  }
}


