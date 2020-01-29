import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MovieDB} from './movieDB';
@Injectable({
  providedIn: 'root'
})
export class ViewallService {
  private url: string = "https://localhost:8441/movie-service2/movie-api/v1/movie"
  constructor(private http : HttpClient) { }
  public getMoviesDB(): Observable<MovieDB>{
    return this.http.get<MovieDB>(this.url);
  }
  public postMoviesDB(movie:any): Observable<MovieDB>{
    return this.http.post<MovieDB>(this.url,movie);
  }
  public putMoviesDB(movie:any): Observable<MovieDB>{
    return this.http.put<MovieDB>(this.url+"/"+movie.id,movie.comments);
  }
  public deleteMoviesDB(movie:any): Observable<MovieDB>{
    return this.http.delete<MovieDB>(this.url+"/"+movie.id);
  }
  
}
