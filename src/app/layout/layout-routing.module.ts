import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: '',
    component: UserLayoutComponent,
    children:[
      {path: 'home', loadChildren: () => DashboardModule },
      {path: 'dashboard', loadChildren: () => DashboardModule }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {path: 'login', loadChildren: () => AuthModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
