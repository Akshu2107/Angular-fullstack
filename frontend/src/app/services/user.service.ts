import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import User from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:8000";
  httpClient = inject(HttpClient);

 constructor(private http: HttpClient) { }

  // getUsers() {
  //   this.http.get(`${this.apiUrl}/getdata`);
  // }
  getUsers(): Observable<User[]> {
    // Return the observable from the HTTP get request
    return this.http.get<User[]>(`${this.apiUrl}/getdata`);
  }
  postUsers(){
    // Return the observable from the HTTP get request
    // return this.httpClient.post<User[]>(`${this.apiUrl}/getdata`);
  }

}
