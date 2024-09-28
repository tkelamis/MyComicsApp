import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Shared/Models/User';
import { Observable } from 'rxjs/internal/Observable';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../Shared/Models/Decoded_Token';


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

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRolesFromToken(): string[] {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        console.log(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
        return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
          ? [decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']]
          : [];
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }

    
    return [];
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
