import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDetails} from '../models/UserDetails';
import {Observable} from 'rxjs/Observable';
import {LoginResponse} from '../models/LoginResponse';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {ApiError} from '../storage/ApiError';

@Injectable()
export class LoginService {
  url = environment.teamConnectUrl + '/users/login';

   constructor(private http: HttpClient, private error: ApiError) { }
 loginAPI(userDetails: Object): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, userDetails, httpOptions)
      .pipe((tap(response => { console.log('Login : ' + response); } ),
        catchError(this.error.handleError('loginError', new LoginResponse()))));
 }
}

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
