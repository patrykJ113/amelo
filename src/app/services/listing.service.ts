import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetAllListingsResponse, Listing, ListingRequestBody} from '@typings/listing';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private apiUrl = `${environment.apiUrl}/listing`

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<GetAllListingsResponse> {
    return this.http.get<GetAllListingsResponse>(this.apiUrl)
  }

  getById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`${this.apiUrl}/${id}`)
  }

  getImage(id: string, pictureName: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/picture/${pictureName}`, { responseType: 'blob' })
  }

  create(listing: ListingRequestBody, files: File[]): Observable<Listing> {
    const formData = new FormData()

    const listingJson = new Blob([JSON.stringify(listing)], { type: 'application/json' })
    formData.append('listing', listingJson)
    if(files) {
      files.forEach(file => formData.append('files', file))
    }

    return this.http.post<Listing>(this.apiUrl, formData)
  }

  update(id: string, listing: ListingRequestBody): Observable<Listing> {
    return this.http.put<Listing>(`${this.apiUrl}/${id}`, listing)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
