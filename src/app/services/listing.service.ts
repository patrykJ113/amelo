import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Listing, ListingRequestBody} from '@typings/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private categoryUrl = 'http://localhost:8080/api/listing'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.categoryUrl)
  }

  getById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`${this.categoryUrl}/${id}`)
  }

  create(listing: ListingRequestBody): Observable<Listing> {
    return this.http.post<Listing>(this.categoryUrl, listing)
  }

  update(id: string, listing: ListingRequestBody): Observable<Listing> {
    return this.http.put<Listing>(`${this.categoryUrl}/${id}`, listing)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.categoryUrl}/${id}`)
  }
}
