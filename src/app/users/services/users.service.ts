import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataResponse, User } from '@common/models';

const url = 'https://gorest.co.in/public/v2/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll$(): Observable<User[]> {
    return this.http.get<User[]>(url);
  }

  get$(id: number): Observable<User> {
    return this.http.get<User>(`${url}/${id}`);
  }

  add$(user: User): Observable<User> {
    return this.http.post<User>(url, user);
  }

  update$(user: User): Observable<User> {
    return this.http.patch<User>(`${url}/${user.id}`, user);
  }

  delete$(id: number): Observable<DataResponse> {
    return this.http.delete<DataResponse>(`${url}/${id}`);
  }
}
