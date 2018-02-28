import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RegisterResponse} from '../models/RegisterResponse';
import {environment} from '../../environments/environment.prod';
import {catchError, tap} from 'rxjs/operators';
import {ApiError} from '../storage/ApiError';

@Injectable()
export class RegisterService {
  url = environment.teamConnectUrl + '/domain/register';

  constructor(private http: HttpClient, private error: ApiError) { }
  registrationAPI(object: Object): Observable<RegisterResponse> {
  return this.http.post<RegisterResponse>(this.url, object)
      .pipe(tap(response => {console.log('Register : ' + response); }),
        catchError(this.error.handleError('registerError ',new RegisterResponse())));
  }

}
