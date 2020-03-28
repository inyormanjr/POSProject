import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { MaterialNavComponent } from './components/material-nav/material-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MaterialDashboardComponent } from './views/main/child/material-dashboard/material-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './views/login/login.component';
import { UserManagementComponent } from './views/main/child/user-management/user-management.component';
import { AdminComponent } from './views/main/admin/admin.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './modules/material/material.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserModalComponent } from './components/modals/user-modal/user-modal.component';
import { ConfirmComponent } from './components/modals/confirm/confirm.component';
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
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
