import { Injectable } from '@angular/core';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';

interface User {
  name:string;
  email: string;
  phone: string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userdata: User[] = [
    {
      name: 'pedro',
      email: 'pedro@gmail.com',
      phone: '435456345',
      password:'dsfgdfgwtt4'
    }
  ]

  get getuserdata () {
    return this.userdata
  }

  constructor() { }

  saveUser (user: User): void {
    this.userdata.push(user);
  }

  getUsers(): User[] {
    return this.userdata;
  }

}
