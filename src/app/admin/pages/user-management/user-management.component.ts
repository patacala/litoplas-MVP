import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface UrlParams {
  userID: string
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  
  urlParams: UrlParams = {
    userID: ''
  }
  queryParams: any

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.urlParams.userID = params['userID']
    )
    this.route.queryParams.subscribe(params => this.queryParams = {...params});
    console.log('query params',  this.queryParams);
  }
  
}
