import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ListResponse} from './models/ListResponse';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {environment} from "../environments/environment";

@Injectable()
export class MovieDetailServiceService {
  private url2 = '&with_images=true&with_cast=true';
  private API_URL = environment.apiUrl + '/api/v2/movie_details.json?movie_id=';
  constructor(private http: HttpClient) { }

  getMovidDetails(id: number): Observable<ListResponse> {
    console.log('URL : ' + this.API_URL + id + this.url2);
    return this.http.get<ListResponse>(this.API_URL + id + this.url2 ).
      pipe(tap(response => {console.log(response); }),
      catchError(this.handleError('getMovieDetails', new ListResponse())));
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
