import { Injectable } from '@angular/core';
import {environment} from '@environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Credentials} from '@typings/Credentials';
import {Observable} from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApiUrl: string = `${environment.apiUrl}/auth`
  private token: string

  constructor(private http: HttpClient) {
    const tokenInLs = localStorage.getItem(this.localStorageJwtKey)
    this.token = tokenInLs ? tokenInLs : ''
  }

  setToken(jwt: string) {
    localStorage.setItem(this.localStorageJwtKey, jwt)
  }

  getToken() {
    return localStorage.getItem(this.localStorageJwtKey)
  }

  isLoggedIn() {
    const token = this.getToken()

    if(token) {
      const decoded = jwtDecode(token)
      if(!decoded.exp) return false
      const expiresAt = decoded.exp;
      const now = Date.now()
      return expiresAt < now
    }
    return false
  }

  private unsetToken() {
    localStorage.removeItem(this.localStorageJwtKey)
  }

  private get localStorageJwtKey() {
    return 'jwt'
  }

  logIn(credentials: Credentials): Observable<HttpResponse<void>> {
    return this.http.post<void>(`${this.authApiUrl}/login`, credentials, { observe: 'response' })
  }

  register(credentials: Credentials) {
    return this.http.post<string>(`${this.authApiUrl}/register`, credentials)
  }

  logOut() {
    this.unsetToken()
  }
}
