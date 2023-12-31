import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  API_URL = 'http://www.omdbapi.com/?apikey=7efaf4dc&y';

  constructor(private http: HttpClient) { }

  get(search: string, page?: number): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${search || ''}&page=${page || 1}`);
  }

  getByID(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}&i=${id}`);
  }

}
