import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
interface UrlParams {
  userID: string
}

interface User {
  name:string;
  email: string;
  phone: string;
  password:string;
}

interface TableData {
  headers: DataKeys[];
  dataColumns: any[]
}

// { description: 'Nombre de usuario' , field: 'name' }
interface DataKeys {
  description: string;
  field: string
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.urlParams.userID = params['userID']
    )
    this.route.queryParams.subscribe(params => this.queryParams = {...params});

    this.tableData.dataColumns = this.userService.getUsers();
  }
  
  urlParams: UrlParams = {
    userID: ''
  }
  queryParams: any;

  get name() {
    return this.formUser.get('name');
  }

  userData: User[] = [];

  tableData: TableData = {
    headers:[
      {description: 'Nombre de usuario', field: 'name'},
      {description: 'Telefono', field: 'phone'},
      {description: 'Correo electronico', field: 'email'},
      {description: 'Contraseña', field: 'password'},
    ],
    dataColumns:[]
  } 

  formUser = this.fb.group({
    "name" : ['', Validators.required],
    "email" :[
      '', 
      [
        Validators.required,
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]
    ],
    "phone" : [
      '', 
      [
        Validators.pattern(/^([0-9])*$/),
        Validators.minLength(7),
        Validators.maxLength(10),
      ]
    ],
    "password" : ['', Validators.required]
  })

  // formUser: FormGroup = new FormGroup({
  //   "name" : new FormControl('', Validators.required),
  //   "email" : new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
  //   ]),
  //   "phone" : new FormControl('', [
  //     Validators.pattern(/^([0-9])*$/),
  //     Validators.minLength(7),
  //     Validators.maxLength(10),
  //   ]),
  //   "password" : new FormControl('', Validators.required)
  // })

  

  getFormControl(controlName:string) {
    return this.formUser.get(controlName);
  }


  processData() {
    const tempUser: User = JSON.parse(JSON.stringify(this.formUser.value));
    this.userService.saveUser(tempUser);
    // this.userData.push(tempUser);
    this.tableData.dataColumns = this.userService.userdata;   
    console.log(this.formUser);
  }
  
}
