import { Injectable } from '@angular/core';
import {environment} from '@environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Credentials} from '@typings/Credentials';
import {Observable} from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import {AmelloJwtPayload} from '@typings/amello-jwt-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApiUrl: string = `${environment.apiUrl}/auth`

  constructor(private http: HttpClient) {
  }

  setToken(jwt: string) {
    localStorage.setItem(this.localStorageJwtKey, jwt)
  }

  getToken() {
    return localStorage.getItem(this.localStorageJwtKey)
  }

  isLoggedIn() {
    const token = this.getToken()
    return token ? this.isTokenExpired(token) : false
  }

  isTokenExpired(token: string) {
    const decoded = jwtDecode<AmelloJwtPayload>(token)
    if(!decoded.exp) {
      this.unsetToken()
      return false
    }

    const expiresAt = decoded.exp * 1000;
    const now = Date.now()
    const valid = expiresAt > now
    if(!valid) this.unsetToken()
    return valid
  }

  getUserIdFromToken(): string | undefined {
    const token = this.getToken()
    if(!token) return undefined

    const decoded = jwtDecode<AmelloJwtPayload>(token)
    return decoded.userId
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
