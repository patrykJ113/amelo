import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category, CategoryRequestBody} from '@typings/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseApiUrl = 'http://localhost:8080/api'
  private categoryUrl = 'http://localhost:8080/api/category'

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl)
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.categoryUrl}/${id}`)
  }

  create(category: CategoryRequestBody): Observable<Category> {
    return this.http.post<Category>(this.categoryUrl, category)
  }

  update(id: string, category: CategoryRequestBody): Observable<Category> {
    return this.http.put<Category>(`${this.categoryUrl}/${id}`, category)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.categoryUrl}/${id}`)
  }
}
