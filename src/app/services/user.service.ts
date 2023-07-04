import { Injectable } from '@angular/core';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userdata = [
    {
      name: 'pedro',
      email: 'pedro@gmail.com',
      phone: '435456345',
      password:'dsfgdfgwtt4'
    }
  ]
  constructor() { }


}
