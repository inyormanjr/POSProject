import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { LayoutModule } from '@angular/cdk/layout';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { MaterialNavComponent } from './components/material-nav/material-nav.component';
import { MaterialDashboardComponent } from './views/main/child/material-dashboard/material-dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { UserManagementComponent } from './views/main/child/user-management/user-management.component';
import { AdminComponent } from './views/main/admin/admin.component';
import { MaterialModule } from './modules/material/material.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserModalComponent } from './components/modals/user-modal/user-modal.component';
import { ConfirmComponent } from './components/modals/confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './services/app-config.service';
import { MainComponent } from './views/store/main/main.component';
import { StoreDashboardComponent } from './views/store/childview/store-dashboard/store-dashboard.component';
import { StoreNavComponent } from './components/store/store-nav/store-nav.component';
import { StoreUsersManagementComponent } from './views/store/childview/store-users-management/store-users-management.component';
import { StoreBranchDetailComponent } from './views/store/childview/store-branch-detail/store-branch-detail.component';
import { StoreProfileComponent } from './views/store/childview/store-profile/store-profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { StoreListResolver } from './resolver/store.info.resolver';
import { StoreListComponent } from './store/childview/store-list/store-list.component';
import { StoreCardComponent } from './components/store/store-card/store-card.component';
import { ComponentTesterComponent } from './component-tester/component-tester.component';
import { StoreFormModalComponent } from './components/store/store-form-modal/store-form-modal.component';
import { StoreService } from './services/store.service';
import { StoreManagementComponent } from './store/childview/store-management/store-management.component';

export function tokenGetter() {
  const token = localStorage.getItem('token');
  return token;
}

@NgModule({
  declarations: [
    AppComponent,
    MaterialNavComponent,
    MaterialDashboardComponent,
    LoginComponent,
    UserManagementComponent,
    AdminComponent,
    UserTableComponent,
    UserModalComponent,
    ConfirmComponent,
    MainComponent,
    StoreDashboardComponent,
    StoreNavComponent,
    StoreUsersManagementComponent,
    StoreBranchDetailComponent,
    StoreProfileComponent,
    StoreListComponent,
    StoreCardComponent,
    ComponentTesterComponent,
    StoreFormModalComponent,
    StoreManagementComponent,
  ],
  imports: [
    BrowserModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot( {
      config: {
        tokenGetter,
        whitelistedDomains: environment.whiteList,
        blacklistedRoutes: [environment.authApi]
      }
    })
  ],
  providers: [
    StoreListResolver,
    ErrorInterceptorProvider,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          // Make sure to return a promise!
          return appConfigService.loadAppConfig();
        };
      }
    },
    OAuthService,
    AuthService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
