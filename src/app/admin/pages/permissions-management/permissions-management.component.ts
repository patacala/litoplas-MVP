import { Component, OnInit } from '@angular/core';

interface Permission {
  name: string;
  description: String;
  isActive: boolean;
}
@Component({
  selector: 'app-permissions-management',
  templateUrl: './permissions-management.component.html',
  styleUrls: ['./permissions-management.component.css']
})
export class PermissionsManagementComponent implements OnInit {

  permissionDefault: Permission = {
    name: '',
    description: '',
    isActive: false
  };

  permission: Permission = this.permissionDefault;

  permissions: Permission[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  processData() {
   this.permissions.push(this.permission);
   this.permission.name = ''; 
   this.permission.description= ''; 
  }

}
