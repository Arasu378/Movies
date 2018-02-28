import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ListResponse} from '../models/ListResponse';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {environment} from '../../environments/environment';

@Injectable()
export class
MoviesListService {
  private API_URL = environment.apiUrl + '/api/v2/list_movies.json?page=1&with_rt_ratings=true';
  constructor(private http: HttpClient) { }
  getMoviesList(): Observable<ListResponse> {
    return this.http.get<ListResponse>(this.API_URL).
    pipe(tap(response => { console.log(response); } ),
      catchError(this.handleError('getMovieList', new ListResponse())) );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      return of(result as T);
    };
  }

}
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
