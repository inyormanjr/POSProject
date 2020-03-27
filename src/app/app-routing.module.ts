import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialNavComponent } from './components/material-nav/material-nav.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/main/admin/admin.component';
import { MaterialDashboardComponent } from './views/main/child/material-dashboard/material-dashboard.component';
import { UserManagementComponent } from './views/main/child/user-management/user-management.component';

const routes: Routes = [{path: '', component: AdminComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'admin', component: AdminComponent, children: [
                          {path: 'dashboard', component:  MaterialDashboardComponent},
                          {path: 'users', component: UserManagementComponent}
                        ]}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
