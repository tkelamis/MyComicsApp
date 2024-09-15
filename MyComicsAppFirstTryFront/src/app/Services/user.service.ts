import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Shared/Models/User';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiGetUrl = 'https://localhost:7166/api/Auth/login';
  user?: User;

  constructor(private httpService: HttpClient) { }

  postUserDataToBackEnd(user: User): Observable<HttpResponse<any>> {
    return this.httpService.post<User>(this.apiGetUrl, user, { observe: 'response' });
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
