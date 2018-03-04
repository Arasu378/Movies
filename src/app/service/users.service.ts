import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GetAllUserResponse} from '../models/GetAllUserResponse';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {StorageService} from '../storage/storage.service';
import {Technicians} from '../models/Technicians';
import {HandleError, HttpErrorHandlerService} from '../cache/http-error-handler.service';

@Injectable()
export class UsersService {
  private API_URL = environment.testingurl + '/users/getAll';
  private handleError: HandleError;
  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = this.httpErrorHandler.createHandleError('Graph Service');

  }
  getUsersList(): Observable<Technicians[]> {
    return this.http.get<Technicians[]>(this.API_URL)
      .pipe(catchError(this.handleError('getAllUsers',  [])));

  }


}
