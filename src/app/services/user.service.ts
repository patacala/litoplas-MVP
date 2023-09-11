import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface User {
  name:string;
  email: string;
  phone: string;
  password:string;
  _id?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = `${environment.api}/users`;
  private countUser$ = new BehaviorSubject<number>(0);

  get totalUsers(): Observable<number> {
    return this.countUser$;
  }

  setTotalUsers(total: number) {
    this.countUser$.next(total);
  }
  
  constructor(private readonly http: HttpClient) { }
  
  // userdata: User[] = [
  //   {
  //     name: 'pedro',
  //     email: 'pedro@gmail.com',
  //     phone: '435456345',
  //     password:'dsfgdfgwtt4'
  //   }
  // ]

  // get getuserdata () {
  //   return this.userdata
  // }


  // saveUser (user: User): void {
  //   this.userdata.push(user);
  // }

  // getUsers(): User[] {
  //   return this.userdata;
  // }

  addNewUser(user: User): Observable<User> {
    const body = {...user};
    delete body._id
    return this.http.post<User>(this.API_URL,body);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }

  updateUser(user: User): Observable<void> {
    const body = user;
    return this.http.put<void>(`${this.API_URL}/${user._id}`, body);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

}
