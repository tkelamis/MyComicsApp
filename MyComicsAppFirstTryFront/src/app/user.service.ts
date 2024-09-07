import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from './Shared/Models/Comic';
import { HttpClient } from '@angular/common/http';
import { User } from './Shared/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiGetUrl = 'https://localhost:7029/api/user';

  constructor(private httpService: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(this.apiGetUrl);
  }

  getUserById(Id: string): Observable<User> {
    return this.httpService.get<User>(`${this.apiGetUrl}/${Id}`);
  }

  postUserToBackEnd(user: User): Observable<User> {
    return this.httpService.post<User>(this.apiGetUrl, user);
  }

  deleteUserFromDatabase(Id: string):Observable<any> {
    return this.httpService.delete(`${this.apiGetUrl}/${Id}`);
  }




}
