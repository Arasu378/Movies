import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GetAllUserResponse} from '../models/GetAllUserResponse';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {StorageService} from '../storage/storage.service';
import {Technicians} from '../models/Technicians';

@Injectable()
export class UsersService {
  private API_URL = environment.teamConnectUrl + '/users/getAll';

  constructor(private http: HttpClient, private storage: StorageService) { }
  private  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.storage.getToken())
      .set('idDomain', this.storage.getDomain())
  };
  getUsersList(): Observable<Technicians[]> {
    return this.http.get<Technicians[]>(this.API_URL , this.httpOptions)
      .pipe(tap(response => console.log( response )),
      catchError(this.handleError('getAllUsers',  [])));

  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      return of(result as T);
    };
  }

}
