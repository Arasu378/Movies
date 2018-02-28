import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {CustomerResponse} from '../models/CustomerResponse';
import {StorageService} from '../storage/storage.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class CustomersService {
  url = environment.teamConnectUrl + '/customers/getAll';
  private  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', this.storage.getToken())
      .set('idDomain', this.storage.getDomain())
  };
  constructor(private http: HttpClient, private storage: StorageService) { }
  customersAll(): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(this.url, this.httpOptions )
      .pipe(tap(response => console.log(response)),
        catchError(this.handleError('getAllCustomers', new CustomerResponse())));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      return of(result as T);
    };
  }
}
