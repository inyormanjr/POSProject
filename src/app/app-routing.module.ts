import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialNavComponent } from './components/material-nav/material-nav.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/main/admin/admin.component';
import { MaterialDashboardComponent } from './views/main/child/material-dashboard/material-dashboard.component';
import { UserManagementComponent } from './views/main/child/user-management/user-management.component';
import { MainComponent } from './views/store/main/main.component';
import { StoreDashboardComponent } from './views/store/childview/store-dashboard/store-dashboard.component';
import { StoreUsersManagementComponent } from './views/store/childview/store-users-management/store-users-management.component';
import { StoreBranchDetailComponent } from './views/store/childview/store-branch-detail/store-branch-detail.component';
import { StoreProfileComponent } from './views/store/childview/store-profile/store-profile.component';

const routes: Routes = [{path: '', component: LoginComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'admin', component: AdminComponent, children: [
                          {path: '', component:  MaterialDashboardComponent},
                          {path: 'dashboard', component:  MaterialDashboardComponent},
                          {path: 'users', component: UserManagementComponent}
                        ]},
                        {path: 'store', component: MainComponent, children: [
                          {path: '', component: StoreDashboardComponent},
                          {path: 'dashboard', component: StoreDashboardComponent},
                          {path: 'storeprofile', component: StoreProfileComponent},
                          {path: 'branch/:id', component: StoreBranchDetailComponent},
                          {path: 'users', component: StoreUsersManagementComponent},
                        ]}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
