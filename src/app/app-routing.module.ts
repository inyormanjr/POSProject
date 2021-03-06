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
import { StoreListResolver, StoreInfoResolver } from './resolver/store.resolver';
import { StoreListComponent } from './store/childview/store-list/store-list.component';
import { ComponentTesterComponent } from './component-tester/component-tester.component';
import { StoreManagementComponent } from './store/childview/store-management/store-management.component';
import { resolve } from 'dns';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tester', component: ComponentTesterComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: MaterialDashboardComponent },
      { path: 'dashboard', component: MaterialDashboardComponent },
      { path: 'users', component: UserManagementComponent }
    ]
  },
  {
    path: 'store',
    component: MainComponent,
    runGuardsAndResolvers: 'always',
    children: [
      { path: '', component: StoreListComponent,  resolve: {stores: StoreListResolver}},
      { path: 'list', component: StoreListComponent,  },
       {
        path: 'management/:id',
        component: StoreManagementComponent, resolve: {store: StoreInfoResolver},
        children: [
          { path: '', component: StoreDashboardComponent },
          { path: 'dashboard', component: StoreDashboardComponent },
          {
            path: 'branch:id',
            component: StoreBranchDetailComponent,
          }
        ]
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
