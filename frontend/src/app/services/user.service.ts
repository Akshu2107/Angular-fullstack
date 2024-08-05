import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import User from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  updateUser(userid: any, user: User) {
    throw new Error('Method not implemented.');
  }
  apiUrl = "http://localhost:8000";
  httpClient = inject(HttpClient);

 constructor(private http: HttpClient) { }

  // getUsers() {
  //   this.http.get(`${this.apiUrl}/getdata`);
  // }
  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(`${this.apiUrl}/getdata`);
  }
  getUser(_id: string): Observable<User> {
    const id = _id;

    return this.http.get<User>(`${this.apiUrl}/getdata/`+id);
  }

  postUsers(data:any){

    return this.httpClient.post(`${this.apiUrl}/postdata`,data);
  }

  deleteuser(_id: string) {
    const id = _id;
    return this.httpClient.delete(`${this.apiUrl}/deletedata/`+id)
  }

  updateData(userid: any, user: User) {
    const id = userid;
    return this.httpClient.put(`${this.apiUrl}/updatedata/`+id, user)
  }

}
