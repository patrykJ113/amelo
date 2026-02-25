import { Injectable } from '@angular/core';
import {environment} from '@environments/environment';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '@typings/Credentials';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApiUrl: string = `${environment.apiUrl}/auth`

  constructor(private http: HttpClient) {
  }

  logIn(credentials: Credentials): Observable<void> {
    return this.http.post<void>(`${this.authApiUrl}/login`, credentials)
  }

  register(credentials: Credentials) {
    return this.http.post<string>(`${this.authApiUrl}/register`, credentials)
  }

  logOut() {}
}
