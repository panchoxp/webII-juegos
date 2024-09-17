import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_USUARIOS = "http://localhost:3000/login";
  private API_ROLES = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post(this.API_USUARIOS, user);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('login') === 'true';
  }

  getRole(): string | null {
    return sessionStorage.getItem('role');
  }

  getUserRole(email: string): Observable<any> {
    return this.http.get(`${this.API_ROLES}?email=${email}`);
  }
}
