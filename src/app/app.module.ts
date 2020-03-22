import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './views/childview/dashboard/dashboard.component';
import { MainComponent } from './views/main/main.component';
import { AppConfigService } from './service/app-config.service';

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
  ],
  imports: [
    BrowserModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ErrorInterceptorProvider,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigService.loadAppConfig();
        };
      }
    },
    OAuthService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
