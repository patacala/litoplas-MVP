import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PermissionsManagementComponent } from './pages/permissions-management/permissions-management.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { AdminManagementComponent } from './pages/admin-management/admin-management.component';


@NgModule({
  declarations: [
    PermissionsManagementComponent,
    UserManagementComponent,
    AdminManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
