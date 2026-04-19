import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetAllListingsResponse, Listing, ListingRequestBody} from '@typings/listing';
import {environment} from '@environments/environment';
import {AuthService} from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private apiUrl = `${environment.apiUrl}/listings`

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAll(): Observable<GetAllListingsResponse> {
    return this.http.get<GetAllListingsResponse>(this.apiUrl)
  }

  getById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`${this.apiUrl}/${id}`)
  }

  getImage(id: string, imageName: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/images/${imageName}`, { responseType: 'blob' })
  }

  create(listing: ListingRequestBody): Observable<Listing> {
    const headers = this.authService.getAuthorizationHeader() ?? {}
    return this.http.post<Listing>(`${this.apiUrl}`, listing, { headers })
  }

  update(id: string, listing: ListingRequestBody): Observable<Listing> {
    return this.http.put<Listing>(`${this.apiUrl}/${id}`, listing)
  }

  uploadImage(listingId: string, file: File): Observable<string> {
    const headers = this.authService.getAuthorizationHeader() ?? {}
    const formData = new FormData()
    formData.append('file', file)
    return this.http.post(`${this.apiUrl}/${listingId}/images`, formData, { headers, responseType: 'text' })
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
