import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 authURL = environment.authApi;
  constructor(private http: HttpClient) { }


  login(model: any) {
      return this.http.post(this.authURL, model)
      .pipe(
        map((response: any) => {
          console.log('test');
          console.log(response);
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      );
  }
}
