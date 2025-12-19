import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetAllListingsResponse, Listing, ListingRequestBody} from '@typings/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private categoryUrl = 'http://localhost:8080/api/listing'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<GetAllListingsResponse> {
    return this.http.get<GetAllListingsResponse>(this.categoryUrl)
  }

  getById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`${this.categoryUrl}/${id}`)
  }

  getImage(id: string, pictureName: string): Observable<Blob> {
    return this.http.get(`${this.categoryUrl}/${id}/picture/${pictureName}`, { responseType: 'blob' })
  }

  create(listing: ListingRequestBody, files: File[]): Observable<Listing> {
    const formData = new FormData()

    const listingJson = new Blob([JSON.stringify(listing)], { type: 'application/json' })
    formData.append('listing', listingJson)
    if(files) {
      files.forEach(file => formData.append('files', file))
    }

    return this.http.post<Listing>(this.categoryUrl, formData)
  }

  update(id: string, listing: ListingRequestBody): Observable<Listing> {
    return this.http.put<Listing>(`${this.categoryUrl}/${id}`, listing)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.categoryUrl}/${id}`)
  }
}
