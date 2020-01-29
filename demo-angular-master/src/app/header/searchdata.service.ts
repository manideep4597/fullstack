import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Movies} from '../movie'
@Injectable({
  providedIn: 'root'
})
export class SearchdataService {
  private url: string = "https://api.themoviedb.org/3/search/movie?api_key=041702d49aa9d51c0ef6d97081f5c0fa&query="
  constructor(private http : HttpClient) { }
  public getMovies(urlextension:string): Observable<Movies>{
    return this.http.get<Movies>(this.url.concat(urlextension.replace(' ','+')));
  }
}
